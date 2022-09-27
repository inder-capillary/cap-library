import * as SvgIcons from ".";

const getSvgComponentFromType = (type) => {
  switch (type) {
    case 'add': return SvgIcons.Add;
    case 'add-media': return SvgIcons.AddMedia;
    case 'add-photo': return SvgIcons.AddPhoto;
    case 'alarm': return SvgIcons.Alarm;
    case 'alert': return SvgIcons.Alert;
    case 'android': return SvgIcons.Android;
    case 'arrow-down': return SvgIcons.ArrowDown;
    case 'arrow-filled': return SvgIcons.ArrowFilled;
    case 'arrow-up': return SvgIcons.ArrowUp;
    case 'back': return SvgIcons.Back;
    case 'bill': return SvgIcons.Bill;
    case 'bulb': return SvgIcons.Bulb;
    case 'calendar': return SvgIcons.Calendar;
    case 'calendar-active': return SvgIcons.CalendarActive;
    case 'carrot': return SvgIcons.Carrot;
    case 'chat-bubble': return SvgIcons.ChatBubble;
    case 'check-circle': return SvgIcons.CheckCircle;
    case 'check-filled': return SvgIcons.CheckFilled;
    case 'check-filled-default': return SvgIcons.CheckFilledDefault;
    case 'chevron-down': return SvgIcons.ChevronDown;
    case 'chevron-left': return SvgIcons.ChevronLeft;
    case 'chevron-right': return SvgIcons.ChevronRight;
    case 'chevron-up': return SvgIcons.ChevronUp;
    case 'close': return SvgIcons.Close;
    case 'communication': return SvgIcons.Communication;
    case 'copy': return SvgIcons.Copy;
    case 'download': return SvgIcons.Download;
    case 'edit': return SvgIcons.Edit;
    case 'filter': return SvgIcons.Filter;
    case 'gallery': return SvgIcons.Gallery;
    case 'graph': return SvgIcons.Graph;
    case 'heart': return SvgIcons.Heart;
    case 'help': return SvgIcons.Help;
    case 'image': return SvgIcons.Image;
    case 'info': return SvgIcons.Info;
    case 'ios': return SvgIcons.Ios;
    case 'lab': return SvgIcons.Lab;
    case 'list-active': return SvgIcons.ListActive;
    case 'location': return SvgIcons.Location;
    case 'logout': return SvgIcons.Logout;
    case 'love-filled': return SvgIcons.LoveFilled;
    case 'media': return SvgIcons.Media;
    case 'megaphone': return SvgIcons.Megaphone;
    case 'message': return SvgIcons.Message;
    case 'more': return SvgIcons.More;
    case 'more-applications': return SvgIcons.MoreApplications;
    case 'mpush': return SvgIcons.Mpush;
    case 'note-tick-material': return SvgIcons.NoteTickMaterial;
    case 'note-with-tick': return SvgIcons.NoteWithTick;
    case 'notepad': return SvgIcons.Notepad;
    case 'notepad-material': return SvgIcons.NotepadMaterial;
    case 'notifications': return SvgIcons.Notifications;
    case 'offer': return SvgIcons.Offer;
    case 'ftp': return SvgIcons.Ftp;
    case 'open-in-new': return SvgIcons.OpenInNew;
    case 'open-in-new-light': return SvgIcons.OpenInNewLight;
    case 'pause': return SvgIcons.Pause;
    case 'performance': return SvgIcons.Performance;
    case 'person': return SvgIcons.Person;
    case 'personlaisation': return SvgIcons.Personlaisation;
    case 'play': return SvgIcons.Play;
    case 'plus': return SvgIcons.Plus;
    case 'settings': return SvgIcons.Settings;
    case 'stop': return SvgIcons.Stop;
    case 'survey': return SvgIcons.Survey;
    case 'survey-response': return SvgIcons.SurveyResponse;
    case 'tag': return SvgIcons.Tag;
    case 'task': return SvgIcons.Task;
    case 'tick': return SvgIcons.Tick;
    case 'tooltip': return SvgIcons.Tooltip;
    case 'upload': return SvgIcons.Upload;
    case 'user': return SvgIcons.User;
    case 'view': return SvgIcons.View;
    case 'warning': return SvgIcons.Warning;
    case 'search': return SvgIcons.Search;
    case 'chart': return SvgIcons.Chart;
    case 'megaphone-filled': return SvgIcons.MegaphoneFilled;
    case 'message-filled': return SvgIcons.MessageFilled;
    case 'send': return SvgIcons.Send;
    case 'sort': return SvgIcons.Sort;
    case 'eye': return SvgIcons.Eye;
    case 'sms': return SvgIcons.Sms;
    case 'call': return SvgIcons.Call;
    case 'groups': return SvgIcons.Groups;
    case 'clock': return SvgIcons.Clock;
    case 'refresh': return SvgIcons.Refresh;
    case 'delete': return SvgIcons.Delete;
    case 'drag': return SvgIcons.Drag;
    case 'earth': return SvgIcons.Earth;
    case 'launch': return SvgIcons.Launch;
    case 'capture': return SvgIcons.Capture;
    case 'dollar': return SvgIcons.Dollar;
    case 'commentMessage': return SvgIcons.CommentMessage;
    case 'greetings': return SvgIcons.Greetings;
    case 'shapeCopy': return SvgIcons.ShapeCopy;
    case 'box': return SvgIcons.Box;
    case 'growth-graph': return SvgIcons.GrowthGraph;
    case 'siren': return SvgIcons.Siren;
    case 'delay': return SvgIcons.Delay;
    case 'attachment': return SvgIcons.Attachment;
    case 'desktop': return SvgIcons.Desktop;
    case 'tablet': return SvgIcons.Tablet;
    case 'Mobile': return SvgIcons.Mobile;
    case 'store': return SvgIcons.Store;
    case 'language': return SvgIcons.Language;
    case 'gender': return SvgIcons.Gender;
    case 'footwear': return SvgIcons.Footwear;
    case 'offerWithColor': return SvgIcons.OfferWithColor;
    case 'minus': return SvgIcons.Minus;
    case 'smsFilled': return SvgIcons.SmsFilled;
    case 'emailFilled': return SvgIcons.EmailFilled;
    case 'wechatFilled': return SvgIcons.WechatFilled;
    case 'mpushFilled': return SvgIcons.MpushFilled;
    case 'reorder': return SvgIcons.Reorder;
    case 'channelPriority': return SvgIcons.ChannelPriority;
    case 'premium': return SvgIcons.Premium;
    case 'apps': return SvgIcons.Apps;
    case 'basket': return SvgIcons.Basket;
    case 'connect': return SvgIcons.Connect;
    case 'funnel': return SvgIcons.Funnel;
    case 'group-chat': return SvgIcons.GroupChat;
    case 'pointer': return SvgIcons.Pointer;
    case 'speaker': return SvgIcons.Speaker;
    case 'store-traffic': return SvgIcons.StoreTraffic;
    case 'video': return SvgIcons.Video;
    case 'mail': return SvgIcons.Mail;
    case 'wechat': return SvgIcons.Wechat;
    case 'scenery': return SvgIcons.Scenery;
    case 'errorIndicator': return SvgIcons.ErrorIndicator;
    case 'premiumColored': return SvgIcons.PremiumColored;
    case 'lock': return SvgIcons.Lock;
    case 'union': return SvgIcons.Union;
    case 'intersect': return SvgIcons.Intersect;
    case 'subtractLeft': return SvgIcons.SubtractLeft;
    case 'subtractRight': return SvgIcons.SubtractRight;
    case 'error': return SvgIcons.Error;
    case 'sync': return SvgIcons.Sync;
    case 'folder': return SvgIcons.Folder;
    case 'click': return SvgIcons.Click;
    case 'line': return SvgIcons.Line;
    case 'unicode': return SvgIcons.Unicode;
    case 'whatsapp': return SvgIcons.Whatsapp;
    case 'notSent': return SvgIcons.NotSent;
    case 'xengage': return SvgIcons.XEngage;
    case 'hotstar': return SvgIcons.DisneyHotstar;
    case 'facebook-filled': return SvgIcons.FacebookFilled;
    case 'google-ad': return SvgIcons.GoogleAd;
    case 'snapchat': return SvgIcons.Snapchat;
    case 'tiktok': return SvgIcons.Tiktok;
    case 'facebook': return SvgIcons.Facebook;
    case 'image-message-filled': return SvgIcons.ImageMessageSelected;
    case 'image-message': return SvgIcons.ImageMessageNormal;
    case 'text-message': return SvgIcons.TextMessageNormal;
    case 'text-message-filled': return SvgIcons.TextMessageSelected;
    case 'rich-message': return SvgIcons.RichMessageNormal;
    case 'rich-message-filled': return SvgIcons.RichMessageSelected;
    case 'smiley-message': return SvgIcons.SmileyMessageNormal;
    case 'smiley-message-filled': return SvgIcons.SmileyMessageSelected;
    case 'carousel-message': return SvgIcons.CarouselMessage;
    case 'carousel-message-filled': return SvgIcons.CarouselMessageSelected;
    case 'rich-video-message': return SvgIcons.RichVideo;
    case 'rich-video-message-filled': return SvgIcons.RichVideoSelected;
    case 'reply': return SvgIcons.Reply;
    case 'sitemap': return SvgIcons.Sitemap;
    case 'button': return SvgIcons.Button;
    case 'viber': return SvgIcons.Viber;
    case 'messageWithTransform': return SvgIcons.MessageWithTransform;
    case 'waitEvent': return SvgIcons.WaitEvent;
    case 'join': return SvgIcons.Join;
    case 'engagementSplit': return SvgIcons.EngagementSplit;
    case 'split': return SvgIcons.Split;
    case 'userAttributeChange': return SvgIcons.UserAttributeChange;
    case 'api': return SvgIcons.Api;
    case 'wechatOutline': return SvgIcons.WechatOutline;
    case 'topXChannel': return SvgIcons.TopXChannel;
    case 'entry': return SvgIcons.Entry;
    case 'exit': return SvgIcons.Exit;
    case 'end': return SvgIcons.End;
    case 'points': return SvgIcons.Points;
    case 'org': return SvgIcons.Org;
    case 'personLove': return SvgIcons.PersonLove;
    case 'group': return SvgIcons.Group;
    case 'refreshCircle': return SvgIcons.RefreshCircle;
    case 'sortUp': return SvgIcons.SortUp;
    case 'star': return SvgIcons.Star;
    case 'downgrade': return SvgIcons.Downgrade;
    case 'scope': return SvgIcons.Scope;
    case 'return': return SvgIcons.Return;
    case 'userCopy': return SvgIcons.UserCopy;
    case 'diamond': return SvgIcons.Diamond;
    case 'filled': return SvgIcons.Filled;
    case 'referal': return SvgIcons.Referal;
    case 'facebook-reach': return SvgIcons.FacebookReach;
    case 'circle-dollar': return SvgIcons.CircleDollar;
    case 'academy': return SvgIcons.Academy;
    case 'headphone': return SvgIcons.HeadPhone;
    case 'add-profile': return SvgIcons.AddProfile;
    case 'check-filled-plus': return SvgIcons.CheckFilledPlus;
    case 'survey-background': return SvgIcons.SurveyBackground;
    case 'academy-background': return SvgIcons.AcademyBackground;
    case 'add-user-background': return SvgIcons.AddUserBackground;
    case 'dollar-background': return SvgIcons.DollarBackground;
    case 'headphone-background': return SvgIcons.HeadphoneBackground;
    case 'megaphone-background': return SvgIcons.MegaphoneBackground;
    case 'monitor-background': return SvgIcons.MonitorBackground;
    case 'loyalty-background': return SvgIcons.LoyaltyBackground;
    case 'rcs': return SvgIcons.Rcs;
    case 'wallet-background': return SvgIcons.WalletBackground;
    case 'alert-warning': return SvgIcons.AlertWarning;
    case 'retry': return SvgIcons.Retry;
    case 'critical-warning': return SvgIcons.CriticalWarning;
    case 'in-progress': return SvgIcons.InProgress;
    case 'note': return SvgIcons.Note;
    case 'warning-circle-filled': return SvgIcons.WarningCircleFilled;
    case 'warning-circle': return SvgIcons.WarningCircle;
    case 'tick-outlined': return SvgIcons.TickOutlined;
    case 'draft-failed': return SvgIcons.DraftFailed;
    case 'draft-partially-failed': return SvgIcons.DraftPartiallyFailed;

    default: return null;
  }
};

export { getSvgComponentFromType };
