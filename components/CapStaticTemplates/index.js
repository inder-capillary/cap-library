/**
 *
 * CapStaticTemplates
 *
 */

import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import debounce from "lodash/debounce";
import CapHeading from "../CapHeading";
import CapRow from "../CapRow";
import CapHeader from "../CapHeader";
import CapLabel from "../CapLabel";
import CapIcon from "../CapIcon";
import CapImage from "../CapImage";
import CapColumn from "../CapColumn";
import CapSpin from "../CapSpin";
import CapTooltip from "../CapTooltip";
import CapColoredTag from "../CapColoredTag";
import LocaleHoc from "../LocaleHoc";
import ModalImage from "../assets/images/group-3.svg";
import {
  BLANK_TEMPLATE,
  BLANK_TEMPLATE_ICON,
} from "./constants";
import {
  StyledDiv,
  TemplatesAndSearchContainer,
  TemplatesContainer,
  SideBar,
  CategoryContainer,
  SearchBox,
  StrategyTemplate,
  TemplateIcon,
  TemplatesModal,
  StyledCapCard,
  PremiumIcon,
} from "./style";
import { CAP_SPACE_12 } from "../styled/variables";

const clsPrefix = "cap-static-templates-v2";
function CapStaticTemplates(props) {
  const {
    categories,
    className,
    cardWidth,
    cardHeight,
    blankCardWidth,
    blankCardHeight,
    selectedCategory,
    onSelectCategory,
    selectedStrategyTemplate,
    onSelectStrategyTemplate,
    isBlankTemplateRequired,
    templatesContainerWidth,
    templatesContainerMaxHeight,
    modalContent,
    searchPlaceholder,
    // Below props are messages form LocaleHoc
    strategyTitleMsg,
    strategyDescriptionMsg,
    comingSoonMsg,
    blankCategoryLabel,
    blankTemplateLabel,
    blankTemplateDescription,
    searchPlaceholderMsg,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const CUSTOM_STRATEGY_PANE = {
    value: BLANK_TEMPLATE,
    key: BLANK_TEMPLATE,
    label: blankTemplateLabel,
    description: blankTemplateDescription,
    icon: BLANK_TEMPLATE_ICON,
    isAvailable: true,
    isBlankTemplate: true,
  };

  function handleClick(value) {
    scrollToSelectedCategory(value);
    onSelectCategory(value);
  }

  function scrollToSelectedCategory(id) {
    const selectedElement = document.getElementById(id);
    const templateContainer = document.querySelector(".templates-container");
    templateContainer.scrollTo(0, selectedElement?.offsetTop);
  }

  const debounceSearch = debounce((text) => {
    getSearchResult(text);
  }, 300);

  function handleSearch(event) {
    const { value } = event?.target;
    setSearchText(value);
    setIsSearching(true);
    debounceSearch(value);
  }

  function handleShowModal(event) {
    const { value } = event?.target;
    onSelectStrategyTemplate(value);

    //Show modal only if template is not Available.

    /* eslint-disable no-unused-expressions */
    categories?.forEach((category) => {
        category?.panes?.forEach((template) => {
          if (template?.key === value && !template.isAvailable) {
            setShowModal(true);
          }
        });
    });
    /* eslint-enable no-unused-expressions */
  }

  function handleHideModal() {
    setShowModal(false);
  }
  function getPane(pane) {
    const {
      value,
      key,
      label,
      description,
      icon,
      isAvailable = false,
      isBlankTemplate,
      ...rest
    } = pane;
    const iconLabelArray = value?.split(" ");
    const iconLabelText = iconLabelArray?.length > 1
      ? iconLabelArray?.[0][0] + iconLabelArray?.[1][0]
      : iconLabelArray?.[0][0];
    return {
      title: (
        <CapRow
          type="flex"
          justify="space-between"
          className={`card-header-row ${
            isBlankTemplate ? "custom-template" : ""
          }`}
        >
          <CapHeader
            title={(
              <CapTooltip title={label}>
                <CapHeading
                  type="h4"
                  className={`card-header-title ${
                    isAvailable ? "card-available" : ""
                  }`}
                >
                  {label}
                </CapHeading>
              </CapTooltip>
            )}
            description={
              isBlankTemplate && (
                <CapLabel type="label1" className="card-content">
                  {description}
                </CapLabel>
              )
            }
          />
          {!isAvailable && !isBlankTemplate && (
            <CapColoredTag
              className="coming-soon-tag"
              style={{ marginBottom: CAP_SPACE_12 }}
              tagColor="#0065ff"
            >
              {comingSoonMsg}
            </CapColoredTag>
          )}
        </CapRow>
      ),
      value: key,
      icon: isBlankTemplate ? (
        <TemplateIcon type={icon} color="blue" />
      ) : (
        <CapColumn className="strategy-icon">
          <span
            className={`text-label ${
              selectedStrategyTemplate === value ? "selected" : ""
            }`}
          >
            {iconLabelText}
          </span>
        </CapColumn>
      ),

      customComponent: !isBlankTemplate && (
        <CapLabel
          type="label1"
          className={!isBlankTemplate && "card-content margin-t-4"}
        >
          {description}
        </CapLabel>
      ),
      radioCardClassName: isAvailable ? 'template-enabled' : 'template-disabled',
      ...rest,
    };
  }

  const getAllPanes = (panes = []) => panes.map((pane) => getPane(pane));

  const getTemplates = useMemo(() => {
    const categoriesData = searchText ? filteredCategories : categories;
    const strategyTemplates = categoriesData?.map((category) => {
      const { value, label, key, color, panes = [] } = category;
      const structuredPanes = getAllPanes(panes);
      return (
        <CapRow id={value} key={key} className="margin-t-13">
          <CapLabel className="margin-l-8 margin-b-8" type="label4">
            {label}
          </CapLabel>
          <StrategyTemplate
            panes={structuredPanes}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            borderColor={color}
            selected={selectedStrategyTemplate}
            value={selectedStrategyTemplate}
            onChange={handleShowModal}
            className={classNames(clsPrefix, className)}
          />
        </CapRow>
      );
    });
    return strategyTemplates;
  }, [searchText, filteredCategories, categories, selectedStrategyTemplate]);

  // This function is to handle the search;
  function getSearchResult(searchValue) {
    const searchString = searchValue?.toLowerCase()?.trim();
    if (!searchString) {
      setIsSearching(false);
      return;
    }
    const filteredData = categories.reduce((result, currentData) => {
      const parentName = currentData?.value?.toLowerCase();
      const isParent = parentName?.indexOf(searchString) > -1;
      const childPanes = currentData?.panes?.filter(
        (childPane) => childPane?.value?.toLowerCase()?.indexOf(searchString) > -1
      );
      const hasPane = !!childPanes?.length;
      const currentDataCopy = { ...currentData };
      if (hasPane) {
        currentDataCopy.panes = childPanes;
        result.push(currentDataCopy);
      } else if (isParent) {
        result.push(currentData);
      }
      return result;
    }, []);
    setIsSearching(false);
    setFilteredCategories(filteredData);
  }

  function getModalContent() {
    const { title, description, iconsAndMessages = [] } = modalContent;
    return (
      <CapRow type="flex" justify="space-between" align="center">
        <CapColumn>
          <CapImage src={ModalImage} className="modal-image" />
        </CapColumn>
        <CapColumn className="modal-info-content">
          <CapHeader
            title={title}
            description={
              <CapColoredTag tagColor="#0065ff">{comingSoonMsg}</CapColoredTag>
            }
          />
          <CapHeading type="label2" className="margin-t-16">
            {description}
          </CapHeading>
          <CapRow
            type="flex"
            align="center"
            justify="space-between"
            className="margin-t-16"
          >
            {iconsAndMessages?.map((data) => (
              <StyledCapCard title={<CapIcon type={data?.iconType} size="m" />}>
                <CapLabel type="label5" style={{ fontWeight: 500 }}>
                  {data?.message}
                </CapLabel>
              </StyledCapCard>
            ))}
          </CapRow>
        </CapColumn>
      </CapRow>
    );
  }

  return (
     <>
       <CapHeader
         className="margin-b-16"
         title={<CapHeading type="h3">{strategyTitleMsg}</CapHeading>}
         description={
           <CapLabel type="label3">{strategyDescriptionMsg}</CapLabel>
         }
       />
       <StyledDiv>
         <SideBar>
           {isBlankTemplateRequired && (
             <CategoryContainer
               selected={BLANK_TEMPLATE === selectedCategory}
               className="category-selector"
               onClick={() => handleClick(BLANK_TEMPLATE)}
             >
               <CapLabel
                 type={BLANK_TEMPLATE === selectedCategory ? "label4" : "label9"}
               >
                 {blankCategoryLabel}
               </CapLabel>
             </CategoryContainer>
           )}
           {categories?.map((category) => (
             <CategoryContainer
               key={category?.key}
               className="category-selector"
               color={category?.color}
               selected={category?.value === selectedCategory}
               onClick={() => handleClick(category?.value)}
             >
               <CapLabel
                 type={
                   category?.value === selectedCategory ? "label4" : "label9"
                 }
               >
                 {category?.label}
                 {category?.premium && <PremiumIcon type="premium" size="s" />}
               </CapLabel>
               <CapLabel type="label1">{category?.panes?.length}</CapLabel>
             </CategoryContainer>
           ))}
         </SideBar>
         <TemplatesAndSearchContainer width={templatesContainerWidth}>
           <SearchBox
             value={searchText}
             onChange={handleSearch}
             onClear={handleSearch}
             placeholder={searchPlaceholder || searchPlaceholderMsg}
           />
           <TemplatesContainer
             className="templates-container"
             maxHeight={templatesContainerMaxHeight}
           >
             <CapSpin spinning={isSearching}>
               {isBlankTemplateRequired && (
                 <CapRow
                   id={BLANK_TEMPLATE}
                   key={BLANK_TEMPLATE}
                   className="margin-t-4"
                 >
                   <StrategyTemplate
                     panes={[getPane(CUSTOM_STRATEGY_PANE)]}
                     cardWidth={blankCardWidth}
                     cardHeight={blankCardHeight}
                     selected={selectedStrategyTemplate}
                     value={selectedStrategyTemplate}
                     onChange={handleShowModal}
                   />
                 </CapRow>
               )}
               {getTemplates}
             </CapSpin>
           </TemplatesContainer>
         </TemplatesAndSearchContainer>

         {/* Modal Implementation. This will change in future */}
         <TemplatesModal visible={showModal} onCancel={handleHideModal}>
           {getModalContent()}
         </TemplatesModal>
       </StyledDiv>
     </>
  );
}

CapStaticTemplates.defaultProps = {
  cardWidth: "278px",
  cardHeight: "104px",
  blankCardWidth: "278px",
  blankCardHeight: "80px",
  categories: [],
  isBlankTemplateRequired: false,
  templatesContainerWidth: "990px",
  templatesContainerMaxHeight: "400px",
};

CapStaticTemplates.propTypes = {
  categories: PropTypes.array,
  className: PropTypes.string,
  cardWidth: PropTypes.string,
  cardHeight: PropTypes.string,
  blankCardWidth: PropTypes.string,
  blankCardHeight: PropTypes.string,
  selectedCategory: PropTypes.string,
  onSelectCategory: PropTypes.func,
  selectedStrategyTemplate: PropTypes.string,
  onSelectStrategyTemplate: PropTypes.func,
  isBlankTemplateRequired: PropTypes.bool,
  templatesContainerWidth: PropTypes.string,
  templatesContainerMaxHeight: PropTypes.string,
  searchPlaceholder: PropTypes.any,
};

export default LocaleHoc(CapStaticTemplates, { key: "CapStaticTemplates" });
