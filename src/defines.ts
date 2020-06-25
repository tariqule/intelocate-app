export const SERVER_URL = 'https://mobile.qa.intelocate.com';

export const ROUTES = {
  index: '/',
  public: {
    login: '/public/login',
    registration: '/public/registration',
    resetPassword: '/public/reset-password',
  },
  protected: {
    index: '/protected',
    dashboard: '/protected/dashboard',
    actions: {
      index: '/protected/actions',
      action: '/protected/actions/:taskId/:tab',
    },
    checklists: '/protected/checklists/:taskId/:formId',
    messages: {
      index: '/protected/messages',
      chat: '/protected/messages/:chatId/:chatName',
    },
    tags: {
      index: '/protected/tags',
      tag: '/protected/:tagId',
    },
    speedDial: {
      addTag: '/protected/speed-dial/add-tag',
      reportIssue: '/protected/speed-dial/report-issue',
      AddImageTags: '/protected/speed-dial/report-issue/addImageTags',
      newConversation: '/protected/speed-dial/new-conversation',
      noneNFCCheckIn: '/protected/non-nfc-checkpoint',
    },
    checkpoint: {
      nfc: '/protected/checkpoint/:nfcId?',
      noneNFCCheckInResult: '/protected/non-nfc-checkin-result/:withIssue?',
    },
    noticePage: '/protected/notice-page',
    offlineEvents: '/protected/offline-events',
  },
};

export const DEFAULT_IMAGE_QULITY = 0.5;

export const OFFLINE_DATE_FORMAT = 'DD-MM-YYYY HH:mm';
