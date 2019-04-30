import * as SvgIcons from ".";

const getSvgComponentFromType = (type) => {
  switch (type) {
    case 'add': return SvgIcons.Add
    case 'add-media': return SvgIcons.AddMedia
    case 'add-photo': return SvgIcons.AddPhoto
    case 'alarm': return SvgIcons.Alarm
    case 'alert': return SvgIcons.Alert
    case 'android': return SvgIcons.Android
    case 'arrow-filled': return SvgIcons.ArrowFilled
    case 'back': return SvgIcons.Back
    case 'bulb': return SvgIcons.Bulb
    case 'calendar': return SvgIcons.Calendar
    case 'calendar-active': return SvgIcons.CalendarActive
    case 'carrot': return SvgIcons.Carrot
    case 'chat-bubble': return SvgIcons.ChatBubble
    case 'check-circle': return SvgIcons.CheckCircle
    case 'check-filled': return SvgIcons.CheckFilled
    case 'check-filled-default': return SvgIcons.CheckFilledDefault
    case 'chevron-down': return SvgIcons.ChevronDown
    case 'chevron-left': return SvgIcons.ChevronLeft
    case 'chevron-right': return SvgIcons.ChevronRight
    case 'chevron-up': return SvgIcons.ChevronUp
    case 'close': return SvgIcons.Close
    case 'communication': return SvgIcons.Communication
    case 'copy': return SvgIcons.Copy
    case 'download': return SvgIcons.Download
    case 'edit': return SvgIcons.Edit
    case 'filter': return SvgIcons.Filter
    case 'gallery': return SvgIcons.Gallery
    case 'graph': return SvgIcons.Graph
    case 'heart': return SvgIcons.Heart
    case 'help': return SvgIcons.Help
    case 'image': return SvgIcons.Image
    case 'info': return SvgIcons.Info
    case 'ios': return SvgIcons.Ios
    case 'lab': return SvgIcons.Lab
    case 'list-active': return SvgIcons.ListActive
    case 'location': return SvgIcons.Location
    case 'logout': return SvgIcons.Logout
    case 'love-filled': return SvgIcons.LoveFilled
    case 'media': return SvgIcons.Media
    case 'megaphone': return SvgIcons.Megaphone
    case 'message': return SvgIcons.Message
    case 'more': return SvgIcons.More
    case 'more-applications': return SvgIcons.MoreApplications
    case 'mpush': return SvgIcons.Mpush
    case 'note-tick-material': return SvgIcons.NoteTickMaterial
    case 'note-with-tick': return SvgIcons.NoteWithTick
    case 'notepad': return SvgIcons.Notepad
    case 'notepad-material': return SvgIcons.NotepadMaterial
    case 'notifications': return SvgIcons.Notifications
    case 'offer': return SvgIcons.Offer
    case 'open-in-new': return SvgIcons.OpenInNew
    case 'pause': return SvgIcons.Pause
    case 'performance': return SvgIcons.Performance
    case 'person': return SvgIcons.Person
    case 'personlaisation': return SvgIcons.Personlaisation
    case 'play': return SvgIcons.Play
    case 'plus': return SvgIcons.Plus
    case 'settings': return SvgIcons.Settings
    case 'stop': return SvgIcons.Stop
    case 'survey': return SvgIcons.Survey
    case 'survey-response': return SvgIcons.SurveyResponse
    case 'tag': return SvgIcons.Tag
    case 'task': return SvgIcons.Task
    case 'tick': return SvgIcons.Tick
    case 'tooltip': return SvgIcons.Tooltip
    case 'upload': return SvgIcons.Upload
    case 'user': return SvgIcons.User
    case 'view': return SvgIcons.View
    case 'warning': return SvgIcons.Warning
    case 'search': return SvgIcons.Search
    case 'chart': return SvgIcons.Chart
    case 'lab': return SvgIcons.Lab
    case 'megaphone-filled': return SvgIcons.MegaphoneFilled
    case 'message-filled': return SvgIcons.MessageFilled
    case 'send': return SvgIcons.Send
    case 'sort': return SvgIcons.Sort
    case 'eye': return SvgIcons.Eye
    case 'sms': return SvgIcons.Sms
    default: return null;
  }
};

export { getSvgComponentFromType };
