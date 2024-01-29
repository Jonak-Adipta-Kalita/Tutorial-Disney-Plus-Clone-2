export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  try {
    const res = await fetch(
      `https://${process.env.FUNCTION_NAME}.azurewebsites.net/api/getaisuggestion?term=${term}`,
      {
        method: "GET",
        next: {
          revalidate: 60 * 60 * 24,
        },
      }
    );

    const message = await res.text();

    return Response.json({ message });
  } catch (error) {
    return { content: "No Money ;-; (yet)" };
  }
};
