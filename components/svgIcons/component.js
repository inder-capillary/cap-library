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
    case 'addmedia': return SvgIcons.AddMedia;
    case 'addphoto': return SvgIcons.AddPhoto;
    case 'alarm': return SvgIcons.Alarm;
    case 'back': return SvgIcons.Back;
    case 'bulb': return SvgIcons.Bulb;
    case 'calendar': return SvgIcons.Calendar;
    case 'checkcircle': return SvgIcons.CheckCircle;
    case 'chevrondown': return SvgIcons.ChevronDown;
    case 'chevronleft': return SvgIcons.ChevronLeft;
    case 'chevronup': return SvgIcons.ChevronUp;
    case 'copy': return SvgIcons.Copy;
    case 'download': return SvgIcons.Download;
    case 'filter': return SvgIcons.Filter;
    case 'gallery': return SvgIcons.Gallery;
    case 'graph': return SvgIcons.Graph;
    case 'help': return SvgIcons.Help;
    case 'lab': return SvgIcons.Lab;
    case 'media': return SvgIcons.Media;
    case 'more': return SvgIcons.More;
    case 'moreapplications': return SvgIcons.MoreApplications;
    case 'mpush': return SvgIcons.Mpush;
    case 'notetickmaterial': return SvgIcons.NoteTickMaterial;
    case 'notewithtick': return SvgIcons.NoteWithTick;
    case 'notepad': return SvgIcons.Notepad;
    case 'notepadmaterial': return SvgIcons.NotepadMaterial;
    case 'notifications': return SvgIcons.Notifications;
    case 'offer': return SvgIcons.Offer;
    case 'pause': return SvgIcons.Pause;
    case 'performance': return SvgIcons.Performance;
    case 'personlaisation': return SvgIcons.Personlaisation;
    case 'play': return SvgIcons.Play;
    case 'plus': return SvgIcons.Plus;
    case 'settings': return SvgIcons.Settings;
    case 'stop': return SvgIcons.Stop;
    case 'survey': return SvgIcons.Survey;
    case 'surveyresponse': return SvgIcons.SurveyResponse;
    case 'upload': return SvgIcons.Upload;
    case 'user': return SvgIcons.User;
    case 'warning': return SvgIcons.Warning;
    default: return SvgIcons.Add;
  }
};

export default getSvgComponentFromType;
