/**
*
* CapStaticTemplates
*
*/

import React, { useState, useMemo } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import CapHeading from '../CapHeading';
import CapRow from '../CapRow';
import CapHeader from '../CapHeader';
import CapLabel from '../CapLabel';
import CapIcon from '../CapIcon';
import CapImage from '../CapImage';
import CapColumn from '../CapColumn';
import CapSpin from '../CapSpin';
import CapTooltip from '../CapTooltip';
import CapColoredTag from '../CapColoredTag';
import LocaleHoc from "../LocaleHoc";
import ModalImage from '../assets/images/group-3.svg';
import {
  BLANK_TEMPLATE,
  BLANK_TEMPLATE_ICON,
} from './constants';
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
} from './style';

const clsPrefix = 'cap-static-templates-v2';
function CapStaticTemplates(props) {
  const {
    categories,
    className,
    cardWidth,
    cardHeight,
    blankCardWidth,
    blankCardHeight,
    selectedCategory,
    onSelect,
    strategyTemplate,
    setStrategyTemplate,
    isBlankTemplateRequired,
    templatesContainerWidth,
    templatesContainerMaxHeight,
    modalContent,
    // Below props are messages form LocaleHoc
    selectCategoryTitleMsg,
    comingSoonMsg,
    blankTemplateLabel,
    blankTemplateDescription,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const blankTemplatePane = {
    value: BLANK_TEMPLATE,
    label: blankTemplateLabel,
    description: blankTemplateDescription,
    icon: BLANK_TEMPLATE_ICON,
    isAvailable: true,
  };

  function handleClick(value) {
    scrollToSelectedCategory(value);
    onSelect(value);
  }

  function scrollToSelectedCategory(id) {
    const selectedElement = document.getElementById(id);
    const templateContainer = document.querySelector('.templates-container');
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
    if (value !== BLANK_TEMPLATE) {
      setShowModal(true);
    }
    setStrategyTemplate(value);
  }

  function handleHideModal() {
    setShowModal(false);
  }

  function getPane(pane) {
    const { value, label, description, icon, isAvailable = false, ...rest } = pane;
    return ({
      title: (
        <CapRow type="flex" justify="space-between" className="card-header-row">
          <CapHeader
            title={(
              <CapTooltip title={label}>
                <CapHeading type="h4" className="card-header-title">
                  {label}
                </CapHeading>
              </CapTooltip>
            )}
            description={isAvailable && (<CapLabel type="label1" className="card-content">{description}</CapLabel>)}
          />
          {!isAvailable && <CapColoredTag tagColor="#0065ff">{comingSoonMsg}</CapColoredTag>}
        </CapRow>
      ),
      value,
      icon: <TemplateIcon type={icon} color="blue" />,
      customComponent: !isAvailable && (
        <CapLabel type="label1" className="card-content">{description}</CapLabel>
      ),
      ...rest,
    });
  }

  const getAllPanes = (panes = []) => panes.map((pane) => getPane(pane));

  const getTemplates = useMemo(() => {
    const categoriesData = searchText ? filteredCategories : categories;
    const strategyTemplates = categoriesData?.map((category) => {
      const { value, label, key, color, panes = [] } = category;
      const structuredPanes = getAllPanes(panes);
      return (
        <CapRow id={value} key={key} className="margin-t-20">
          <CapLabel className="margin-l-8 margin-b-8" type="label4">{label}</CapLabel>
          <StrategyTemplate
            panes={structuredPanes}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            borderColor={color}
            selected={strategyTemplate}
            value={strategyTemplate}
            onChange={handleShowModal}
            className={classNames(clsPrefix, className)}
          />
        </CapRow>
      );
    });
    return strategyTemplates;
  }, [searchText, filteredCategories, categories, strategyTemplate]);

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
            description={(<CapColoredTag tagColor="#0065ff">{comingSoonMsg}</CapColoredTag>)}
          />
          <CapHeading type="label2" className="margin-t-16">{description}</CapHeading>
          <CapRow type="flex" align="center" justify="space-between" className="margin-t-16">
            {iconsAndMessages?.map( (data) => (
              <StyledCapCard
                title={(
                  <CapIcon type={data?.iconType} size="m" />
                )}>
                <CapLabel type="label5" style={{ fontWeight: 500 }}>{data?.message}</CapLabel>
              </StyledCapCard>
            ))}
          </CapRow>
        </CapColumn>
      </CapRow>
    );
  }

  return (
    <>
      <CapHeading type="h3" className="margin-b-12">{selectCategoryTitleMsg}</CapHeading>
      <StyledDiv>
        <SideBar>
          {isBlankTemplateRequired && (
            <CategoryContainer
              selected
              onClick={() => handleClick(BLANK_TEMPLATE)}
            >
              <CapLabel type="label4">{blankTemplateLabel}</CapLabel>
            </CategoryContainer>
          )}
          {categories?.map((category) => (
            <CategoryContainer
              key={category?.key}
              color={category?.color}
              selected={category?.value === selectedCategory}
              onClick={() => handleClick(category?.value)}
            >
              <CapLabel type="label9">{category?.label}</CapLabel>
              <CapLabel type="label1">{category?.panes?.length}</CapLabel>
            </CategoryContainer>
          ))}
        </SideBar>
        <TemplatesAndSearchContainer width={templatesContainerWidth}>
          <SearchBox value={searchText} onChange={handleSearch} onClear={handleSearch} />
          <TemplatesContainer className="templates-container" maxHeight={templatesContainerMaxHeight}>
            <CapSpin spinning={isSearching}>
              {isBlankTemplateRequired && (
                <CapRow id={BLANK_TEMPLATE} key={BLANK_TEMPLATE} className="margin-t-4">
                  <StrategyTemplate
                    panes={[getPane(blankTemplatePane)]}
                    cardWidth={blankCardWidth}
                    cardHeight={blankCardHeight}
                    selected={strategyTemplate}
                    value={strategyTemplate}
                    onChange={handleShowModal}
                  />
                </CapRow>
              )}
              {getTemplates}
            </CapSpin>
          </TemplatesContainer>
        </TemplatesAndSearchContainer>

        {/* Modal Implementation. This will change in future */}
        <TemplatesModal
          visible={showModal}
          onCancel={handleHideModal}
        >
          {getModalContent()}
        </TemplatesModal>
      </StyledDiv>
    </>
  );
}

CapStaticTemplates.defaultProps = {
  cardWidth: '278px',
  cardHeight: '104px',
  blankCardWidth: '278px',
  blankCardHeight: '80px',
  categories: [],
  isBlankTemplateRequired: false,
  templatesContainerWidth: '990px',
  templatesContainerMaxHeight: '400px',
};

CapStaticTemplates.propTypes = {
  categories: PropTypes.array,
  className: PropTypes.string,
  cardWidth: PropTypes.string,
  cardHeight: PropTypes.string,
  blankCardWidth: PropTypes.string,
  blankCardHeight: PropTypes.string,
  selectedCategory: PropTypes.string,
  onSelect: PropTypes.func,
  strategyTemplate: PropTypes.string,
  setStrategyTemplate: PropTypes.func,
  isBlankTemplateRequired: PropTypes.bool,
  templatesContainerWidth: PropTypes.string,
  templatesContainerMaxHeight: PropTypes.string,
  modalContent: PropTypes.object,
};

export default LocaleHoc(CapStaticTemplates, { key: "CapStaticTemplates" });
