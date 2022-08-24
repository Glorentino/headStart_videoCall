import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";



export const config = {mode: "rtc", codec: "vp8", appID: appID, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
