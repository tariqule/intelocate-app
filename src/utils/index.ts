import * as H from 'history';
import { Linking, Alert } from 'react-native';
import { ROUTES, SERVER_URL } from '../defines';
import { redirectTo } from '../ui-components/redirector';
import { ActionInfoTab } from '../pages/protected/actions/action-info/types';


export * from './date';
export * from './wait';

export function uppercaseFirstLetter(text: string): string {
    const parts = text.split(' ');
    if (parts.length > 1) {
        return parts.map(uppercaseFirstLetter).join(' ');
    }
    let data = text.toLowerCase();
    return `${data.charAt(0).toUpperCase()}${data.slice(1, data.length)}`;
}

export function getActionUrl(id: string, tab?: ActionInfoTab): string {
    const tabName = tab ? tab : 'main-info';
    return ROUTES.protected.actions.action.replace(':taskId', id).replace(':tab', tabName);
}

export function getChatUrl(envelopeId: string, envelopeName: string): string {
    return ROUTES.protected.messages.chat
        .replace(':chatId', envelopeId)
        .replace(':chatName', encodeURIComponent(envelopeName));
}

export function getTagUrl(id: string): string {
    return ROUTES.protected.tags.tag.replace(':tagId', id);
}

export function moveToPage(to: string, history?: H.History) {
    if (history) {
        setTimeout(() => history.push(to), 300);
    }
}

export function checkpointListener(id?: string) {
    let url: string;
    if (id) {
        url = ROUTES.protected.checkpoint.nfc.replace(':nfcId', id);
    } else {
        url = ROUTES.protected.noticePage;
    }
    redirectTo(url);
}

export function capitalazeEachWordInSentence(sentence: string): string {
    return sentence
        .split(' ')
        .map(w => `${w.charAt(0).toUpperCase()}${w.substr(1, w.length)}`)
        .join(' ');
}

export async function openFileByURL(url: string) {
    const can = await Linking.canOpenURL(url);
    if (can) {
        Linking.openURL(url);
    } else {
        Alert.alert(`Unfortunately, this file can't be opened`);
    }
}

export function isImageMimeType(fileType: string): boolean {
    const CHECKER_REGEXP =
        /^image\/(gif|jpeg|pjpeg|png|tiff|svg\+xml|vnd\.microsoft\.icon|vnd\.wap\.wbmp|webp)$/;
    return CHECKER_REGEXP.test(fileType);
}

export function getFileURL(id: string, fileName: string): string {
    return `${SERVER_URL}/api/files/${id}/${encodeURIComponent(fileName)}`;
}
