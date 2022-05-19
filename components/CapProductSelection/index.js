import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import { Tree, Tooltip, Checkbox } from "antd";

import CapIcon from '../CapIcon';
import CapHeading from '../CapHeading';
import CapRow from '../CapRow';
import CapButton from '../CapButton';
import CapPopover from '../CapPopover';
import CapTree from '../CapTree';
import CapRadio from '../CapRadio';
import CapTooltip from '../CapTooltip';
import LocaleHoc from "../LocaleHoc";
import { CAP_G06 } from '../styled/variables';

import "./_capProductSelection.scss";
import { BRAND, CATEGORY, PRODUCT_ATTRIBUTE, ATTRIBUTE, SKU as SKU_CONSTANT, SKU_UPLOAD, SKU_SELECT, LINE_ITEM } from './constants';
import { StyledCapCard } from './style';

const clsPrefix = "cap-product-selection-v2";

const { TreeNode } = Tree;

const CapProductSelection = ({
  treeData: treeDataProps,
  target,
  trigger = "click",
  placement,
  overlayClassName,
  selectedAttributes = [],
  handleSelect = () => {},
  isProductMandatory,
  /**LocaleHoc messages */
  lineItem,
  selectAttribute,
  brand,
  brandInfo,
  category,
  categoryInfo,
  product,
  productInfo,
  SKU,
  uploadSKU,
  uploadSKUInfo,
  comingSoon,
  changeSelection,
  description,
  okText,
  cancelText,
  selectValues,
  atleast1Attribute,
  ...rest
}) => {
  const [showPopover, setShowPopover] = useState(false);
  const [attribute, setAttribute] = useState(null);
  const [intermediateValue, setIntermediateValue] = useState(null);
  const [intermediateSubAttribute, setIntermediateSubAttribute] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isBrandSelected, setIsBrandSelected] = useState(false);
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [isProductSelected, setIsProductSelected] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (selectedAttributes.length) {
      let brandSelected = false;
      let categorySelected = false;
      let productSelected = false;
      let skuSelected = false;

      selectedAttributes.forEach((attributeLocal) => {
        if (attributeLocal === SKU_CONSTANT) {
          skuSelected = true;
          return;
        }
        if (attributeLocal === BRAND) brandSelected = true;
        if (attributeLocal === CATEGORY) categorySelected = true;
        if (attributeLocal === PRODUCT_ATTRIBUTE) productSelected = true;
        setAttribute(ATTRIBUTE);
      });
      setIsBrandSelected(brandSelected);
      setIsCategorySelected(categorySelected);
      setIsProductSelected(productSelected);
      if (skuSelected) setAttribute(SKU_CONSTANT);
    }
  }, [selectedAttributes]);

  useEffect(() => {
    if (!showPopover) {
      const checkedKeys = [];
      if (isBrandSelected) checkedKeys.push(BRAND);
      if (isCategorySelected) checkedKeys.push(CATEGORY);
      if (isProductSelected) checkedKeys.push(PRODUCT_ATTRIBUTE);
      if (attribute === ATTRIBUTE) handleSelect(checkedKeys);
      if (attribute === SKU_CONSTANT) handleSelect([SKU_CONSTANT]);
    }
  },
  [
    showPopover,
    isBrandSelected,
    isCategorySelected,
    isProductSelected,
    attribute,
  ]);

  const handleCheckboxSelect = (event) => {
    const { target: { value } } = event;
    if (attribute && attribute !== ATTRIBUTE) {
      setShowModal(true);
      setIntermediateValue(ATTRIBUTE);
      setIntermediateSubAttribute(value);
      return;
    }
    if (!attribute) setAttribute(ATTRIBUTE);
    switch (value) {
      case BRAND:
        setIsBrandSelected((prevState) => !prevState);
        break;
      case CATEGORY:
        setIsCategorySelected((prevState) => !prevState);
        break;
      case PRODUCT_ATTRIBUTE:
        setIsProductSelected((prevState) => !prevState);
        break;
      default:
        //no-default-case
    }
  };

  const handleOk = () => {
    setShowModal(false);
    setAttribute(intermediateValue);
    setIntermediateValue(null);
    if (intermediateValue === SKU) {
      setIsBrandSelected(false);
      setIsCategorySelected(false);
      setIsProductSelected(false);
    }
    if (intermediateSubAttribute) {
      switch (intermediateSubAttribute) {
        case BRAND:
          setIsBrandSelected(true);
          break;
        case CATEGORY:
          setIsCategorySelected(true);
          break;
        case PRODUCT_ATTRIBUTE:
          setIsProductSelected(true);
          break;
        default:
          //no-default-case
      }
      setIntermediateSubAttribute(null);
    } else if (intermediateValue === ATTRIBUTE) {
      setIsBrandSelected(true);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setIntermediateValue(null);
  };

  const handleRadioOnChange = (event) => {
    if (attribute) {
      setShowModal(true);
      setIntermediateValue(event.target.value);
      return;
    }
    setAttribute(event.target.value);
  };

  const checkedMap = {
    [BRAND]: isBrandSelected,
    [CATEGORY]: isCategorySelected,
    [PRODUCT_ATTRIBUTE]: isProductSelected,
  };

  const titleMap = {
    [BRAND]: brand,
    [CATEGORY]: category,
    [PRODUCT_ATTRIBUTE]: product,
  };

  const checkIfDisabled = (type) => {
    if (isProductMandatory) {
      switch (type) {
        case BRAND:
          return isBrandSelected && !isCategorySelected && !isProductSelected;
        case CATEGORY:
          return isCategorySelected && !isBrandSelected && !isProductSelected;
        case PRODUCT_ATTRIBUTE:
          return isProductSelected && !isCategorySelected && !isBrandSelected;
        default:
          return false;
      }
    }
    return false;
  };

  const getCheckboxComponent = (type) => {
    if (checkIfDisabled(type)) {
      return (
        <CapTooltip title={atleast1Attribute}>
          <Checkbox checked={checkedMap[type]} value={type} onChange={handleCheckboxSelect} disabled>{titleMap[type]}</Checkbox>
        </CapTooltip>
      );
    }
    return (
      <Checkbox checked={checkedMap[type]} value={type} onChange={handleCheckboxSelect}>{titleMap[type]}</Checkbox>
    );
  };

  const defaultTreeData = [
    {
      title: lineItem,
      key: LINE_ITEM,
      children: [
        {
          title: <CapRadio checked={attribute === ATTRIBUTE} value={ATTRIBUTE} onChange={handleRadioOnChange}>{selectAttribute}</CapRadio>,
          key: ATTRIBUTE,
          children: [
            {
              title: getCheckboxComponent(BRAND),
              key: BRAND,
              info: brandInfo,
            },
            {
              title: getCheckboxComponent(CATEGORY),
              key: CATEGORY,
              info: categoryInfo,
            },
            {
              title: getCheckboxComponent(PRODUCT_ATTRIBUTE),
              key: PRODUCT_ATTRIBUTE,
              info: productInfo,
            },
          ],
        },
        {
          title: <CapRadio checked={attribute === SKU_CONSTANT} value={SKU_CONSTANT} onChange={handleRadioOnChange}>{SKU}</CapRadio>,
          key: SKU_CONSTANT,
          children: [
            {
              title: <CapRadio onChange={handleRadioOnChange} value={SKU_CONSTANT} checked={attribute === 'SKU'}>{uploadSKU}</CapRadio>,
              key: SKU_UPLOAD,
              info: uploadSKUInfo,
            },
            {
              title: <CapRadio disabled>{selectValues}</CapRadio>,
              key: SKU_SELECT,
              info: comingSoon,
              isHover: true,
            },
          ],
        },
      ],
    },
  ];


  const getTreeData = (treeData) => {
    const finalTreeData = treeData?.reduce((result, data) => {
      const { title, key, children = [], checkable, info, isHover } = data;
      const hoverProps = {};
      const tooltipProp = {};
      // To show the  tooltip information on hover when isHover prop is true
      if (isHover) {
        //In case of disabled product selection option, using this option to show disabled tooltip value
        hoverProps.onMouseLeave = () => setIsHovering(false);
        hoverProps.onMouseEnter = () => setIsHovering(true);
        tooltipProp.visible = isHovering;
      }

      if (title) {
        const treeNodeProps = {
          title: (
            <span {...hoverProps}>
              <span className="tree-node-title">{title}</span>
              {info && (
                <span className="info-tooltip">
                  <Tooltip {...tooltipProp} placement="right" title={info}>
                    <CapIcon size="s" style={{ color: CAP_G06 }} type="info" />
                  </Tooltip>
                </span>
              )}
            </span>
          ),
          key,
          isLeafNode: !children?.length,
          checkable,
        };

        result.push(
          <TreeNode {...treeNodeProps}>
            {children?.length && getTreeData(children)}
          </TreeNode>
        );
      }
      return result;
    }, []);
    return finalTreeData;
  };
  return (
    <CapPopover
      visible={showPopover}
      onVisibleChange={setShowPopover}
      trigger={trigger}
      placement={placement}
      overlayClassName={classNames(`${clsPrefix}`, overlayClassName, { greyed: showModal })}
      {...rest}
      content={(
        <>
          <CapTree
            blockNode
            selectable={false}
            defaultExpandAll
            disabled={showModal}
            {...rest}
          >
            {getTreeData(treeDataProps || defaultTreeData)}
          </CapTree>
          {showModal && (
            <StyledCapCard>
              <CapRow type="flex" align="center" justify="space-between" className="card-title">
                <CapHeading type="h3">{changeSelection}</CapHeading>
                <CapIcon type="close" size="s" style={{ paddingTop: '4px' }} />
              </CapRow>
              <CapHeading type="h5" className="card-description">{description}</CapHeading>
              <CapRow className="card-buttons">
                <CapButton onClick={handleOk} className="card-buttons-primary" type="primary">{okText}</CapButton>
                <CapButton onClick={handleCancel} type="secondary">{cancelText}</CapButton>
              </CapRow>
            </StyledCapCard>
          )}
        </>
      )}
    >
      {target}
    </CapPopover>
  );
};

CapProductSelection.propTypes = {
  target: PropTypes.node,
  treeData: PropTypes.array,
  trigger: PropTypes.string,
  placement: PropTypes.string,
  overlayClassName: PropTypes.string,
  handleSelect: PropTypes.func,
  selectedAttributes: PropTypes.array,
  isProductMandatory: PropTypes.bool,
  /**LocaleHoc messages */
  lineItem: PropTypes.string,
  selectAttribute: PropTypes.string,
  brand: PropTypes.string,
  brandInfo: PropTypes.string,
  category: PropTypes.string,
  categoryInfo: PropTypes.string,
  product: PropTypes.string,
  productInfo: PropTypes.string,
  SKU: PropTypes.string,
  uploadSKU: PropTypes.string,
  uploadSKUInfo: PropTypes.string,
  comingSoon: PropTypes.string,
  changeSelection: PropTypes.string,
  description: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  selectValues: PropTypes.string,
  atleast1Attribute: PropTypes.string,
};

export default LocaleHoc(CapProductSelection, { key: 'CapProductSelection' });
