//Auth token we will use to generate a meeting and connect to it
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI0NjlmZWUzOC0xYTUxLTQwOWYtOTE2Yi00ZTZhZmRmY2EyM2IiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxMzM4OTU5MywiZXhwIjoxNzE1OTgxNTkzfQ.5wuhy9CmeWgi9goZ3DDE2CVAeFiV--E4Bqmnfz2NbxY";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};