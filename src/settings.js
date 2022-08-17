import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appID = "a7fb2830a3a8478cb750e1bdb7b2d970";
const token = "006a7fb2830a3a8478cb750e1bdb7b2d970IAA45cGal8RDH/damIhPx8pTx4FIZ/y82TN2H5dICpFJ7WTNKL8AAAAAEADYBo2ZQYr9YgEAAQBAiv1i";


export const config = {mode: "rtc", codec: "vp8", appID: appID, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
