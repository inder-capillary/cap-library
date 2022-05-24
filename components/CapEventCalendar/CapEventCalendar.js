import React, {
  useState,
  useEffect,
} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import moment from "moment";

//components
import CapIcon from "../CapIcon";
import MonthHeader from "./components/MonthHeader";
import DayDropdown from "./components/DayDropdown";
import {FONT_SIZE_S, FONT_FAMILY } from "../styled/variables";

//styles
import "./_capEventCalendar.scss";

//utils
import {
  getMonthsForQuarter,
  formatDataToSuitCanvas,
  handleYearChange,
  splitMonthsArrayToQuarterChunks,
} from "./utils";

//constants
import {
  QUARTERS,
  QUARTER_LABELS,
  DAY_LABELS,
  MONTH_LABELS,
} from "./constants";
import CalendarCanvas from "./CalendarCanvas";
import CapRow from "../CapRow";
import CapIllustration from "../CapIllustration";
import EmptyStateIllustrationForPromos from '../assets/images/EmptyStateIllustrationForPromos.png';

const DefaultPopover = ({ title }) => <div>{title}</div>;

DefaultPopover.propTypes = {
  title: PropTypes.string,
};

const CapEventCalendar = ({
  calendarDate = moment().format(),
  events,
  popoverContent,
  onQuarterChange,
  selectedQuarter,
  calendarGridLineLabel,
  dayLabels,
  allQuartersLabel,
  monthLabels,
  todayTooltipProps,
  dashLineOffsetY,
  eventHeight,
  eventRowGap,
  textPadding,
  eventStartYOffset,
  minCanvasHeight,
  canvasFont,
  popoverPlacement,
  emptyState,
  emptyStateTitle,
  emptyStateDescription,
  emptyStateButtonLabel,
  onEmptyStateButtonClick,
}) => {
  const [carouselDate, setCarouselDate] = useState(
    calendarDate || moment().format()
  ); //To calculate the year based on carousel navigation

  const [quarter, setQuarter] = useState(
    selectedQuarter ? QUARTERS[selectedQuarter] : moment().quarter()
  ); //display quarter info in the view

  const [displayMonths, setDisplayMonths] = useState([]);
  const [formattedEvents, setFormattedEvents] = useState([]);

  const [error, showError] = useState(false); //disable the left carousel click when first month of previous year is reached
  const [dayGrid, setDayGrid] = useState(1); //show grid line based on the day selected in dropdown
  const [quarterMonths] = useState(
    splitMonthsArrayToQuarterChunks(monthLabels)
  );

  useEffect(() => {
    const _quarter = selectedQuarter ? QUARTERS[selectedQuarter] : quarter;
    setDisplayMonths(
      getMonthsForQuarter(_quarter, quarterMonths) //show months of the quarter
    );
    setFormattedEvents(
      formatDataToSuitCanvas(
        events,
        selectedQuarter
          ? QUARTERS[selectedQuarter]
          : quarter || moment().quarter()
      )
    );
  }, [events]);

  /**
   * Perform respective date and year changes on left and right carousel icon clicks
   * @param {*} currentQuarter , needed to increment/decrement the quarter
   * @param {*} date , to calculate if the year needs to be decremented based on date
   * @param {*} increment , true => increment and false => decrement
   * @param {*} referenceDate , date that decides the default year of the calendar
   * @returns
   */
  const handleCarouselClick = (
    currentQuarter,
    date,
    increment,
    referenceDate
  ) => {
    if (increment) showError(false);
    const values = handleYearChange(
      currentQuarter,
      date,
      increment,
      referenceDate
    );
    if (values) {
      setCarouselDate(values[1]);
      onQuarterChange(values[0], moment(values[1]).year());
      if (values[2]) showError(true);
      return values[0];
    }
    return currentQuarter;
  };

  /**
   *
   * @param {*} ifDecrement, if true, pass calendarDate to decide if the limit that is previous year is reached
   * if false, unlimited movement to the future quarters
   */
  const handleQuarterSelection = (ifDecrement) => {
    if (ifDecrement) {
      setQuarter((prevQuarter) => handleCarouselClick(prevQuarter, carouselDate, false, calendarDate));
    } else {
      setQuarter((prevQuarter) => handleCarouselClick(prevQuarter, carouselDate, true));
    }
  };

  const handleDayGridSelection = (day) => {
    setDayGrid(day);
  };

  const onClickQuarterLeft = () => handleQuarterSelection(true);

  const onClickQuarterRight = () => handleQuarterSelection(false);

  //Adds the arrangment to the empty state illustration
  const getIllustrationProps = (hasAccess) => ({
    illustrationImage: EmptyStateIllustrationForPromos,
    title: emptyStateTitle,
    hasAccess,
    description: emptyStateDescription,
    descriptionPosition: "bottom",
    buttonLabel: emptyStateButtonLabel, //prevents the required warning in the console
    onClick: onEmptyStateButtonClick, //prevents the required warning in the console
  });


  return (
    <>
      <div className="event-calendar__header">
        <div className="event-calendar__header__left">
          <div>
            <CapIcon
              type="chevron-left"
              style={{ cursor: "pointer" }}
              className={classnames({ "disable-left": error, "carousel-icon": true})}
              onClick={onClickQuarterLeft}
            />
            <CapIcon
              type="chevron-right"
              className="carousel-icon"
              onClick={onClickQuarterRight}
            />
          </div>
          <div className="quarter-label">
            <span>{allQuartersLabel[quarter - 1]}</span>
            {moment(carouselDate).year()}
          </div>
        </div>
        <div className="event-calendar__header__right">
          {calendarGridLineLabel}
          <DayDropdown
            fetchDay={handleDayGridSelection}
            day={dayGrid}
            dayLabels={dayLabels}
          />
        </div>
      </div>
      {emptyState && !formattedEvents.length
      && (
        <CapRow>
          <CapIllustration {...getIllustrationProps(true)} />
        </CapRow>
      )
      }
      {formattedEvents.length > 0
        && <>
          <MonthHeader displayMonths={displayMonths} />
          <CalendarCanvas
            {...{todayTooltipProps,
              formattedEvents,
              dayGrid,
              displayMonths,
              carouselDate,
              dashLineOffsetY,
              eventHeight,
              eventRowGap,
              textPadding,
              eventStartYOffset,
              minCanvasHeight,
              canvasFont,
              popoverPlacement,
              popoverContent}}
          />
        </>
      }
    </>
  );
};

CapEventCalendar.propTypes = {
  calendarDate: PropTypes.string,
  events: PropTypes.array,
  popoverContent: PropTypes.any,
  onQuarterChange: PropTypes.func,
  selectedQuarter: PropTypes.string,
  calendarGridLineLabel: PropTypes.string,
  dayLabels: PropTypes.array,
  allQuartersLabel: PropTypes.array,
  monthLabels: PropTypes.array,
  todayTooltipProps: PropTypes.object,
  dashLineOffsetY: PropTypes.number,
  eventHeight: PropTypes.number,
  eventRowGap: PropTypes.number,
  textPadding: PropTypes.number,
  eventStartYOffset: PropTypes.number,
  minCanvasHeight: PropTypes.number,
  canvasFont: PropTypes.string,
  popoverPlacement: PropTypes.string,
};

CapEventCalendar.defaultProps = {
  popoverContent: DefaultPopover,
  dashLineOffsetY: 20,
  eventHeight: 24,
  eventRowGap: 12,
  textPadding: 12,
  eventStartYOffset: 40,
  minCanvasHeight: 150,
  todayTooltipProps: { title: "Today" },
  allQuartersLabel: QUARTER_LABELS,
  dayLabels: DAY_LABELS,
  monthLabels: MONTH_LABELS,
  canvasFont: `normal ${FONT_SIZE_S} ${FONT_FAMILY}`,
  calendarGridLineLabel: "Calendar Grid Line",
  popoverPlacement: "leftTop",
  emptyStateTitle: "You have no events for this quarter",
  emptyStateDescription: "Please create an event to view it here",
  emptyStateButtonLabel: "Create Event",
};

export default CapEventCalendar;
