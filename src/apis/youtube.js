import axios from "axios";

const key = "AIzaSyD_V3d1esWWRAZmGOrRPiBd2GipAE4kHo8";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: key
  }
});