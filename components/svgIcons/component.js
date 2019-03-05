import * as SvgIcons from ".";

const getSvgComponentFromType = (type) => {
  switch (type) {
    case 'add': return SvgIcons.Add;
    case 'calendaractive': return SvgIcons.CalendarActive;
    case 'chevronright': return SvgIcons.ChevronRight;
    case 'close': return SvgIcons.Close;
    case 'edit': return SvgIcons.Edit;
    case 'image': return SvgIcons.Image;
    case 'info': return SvgIcons.Info;
    case 'listactive': return SvgIcons.ListActive;
    case 'logout': return SvgIcons.Logout;
    case 'openinnew': return SvgIcons.OpenInNew;
    case 'tag': return SvgIcons.Tag;
    case 'tick': return SvgIcons.Tick;
    case 'tooltip': return SvgIcons.Tooltip;
    case 'view': return SvgIcons.View;
    case 'alert': return SvgIcons.Alert;
    case 'arrowfilled': return SvgIcons.ArrowFilled;
    case 'carrot': return SvgIcons.Carrot;
    case 'chatbubble': return SvgIcons.ChatBubble;
    case 'checkfilled': return SvgIcons.CheckFilled;
    case 'checkfilleddefault': return SvgIcons.CheckFilledDefault;
    case 'communication': return SvgIcons.Communication;
    case 'heart': return SvgIcons.Heart;
    case 'location': return SvgIcons.Location;
    case 'lovefilled': return SvgIcons.LoveFilled;
    case 'megaphone': return SvgIcons.Megaphone;
    case 'message': return SvgIcons.Message;
    case 'person': return SvgIcons.Person;
    case 'task': return SvgIcons.Task;
    case 'uparrrowfilled': return SvgIcons.UpArrrowFilled;
    case 'android': return SvgIcons.Android;
    case 'ios': return SvgIcons.Ios;
    default: return SvgIcons.Add;
  }
};

export default getSvgComponentFromType;
