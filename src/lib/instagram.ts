export const getRecentPosts = async (): Promise<Response | null> => {
  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,permalink,media_url,thumbnail_url,caption&access_token=${process.env.INSTAGRAM_TOKEN}`,
    );
    return await res.json();
  } catch (e) {
    return null;
  }
};
