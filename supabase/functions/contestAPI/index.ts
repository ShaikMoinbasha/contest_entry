import handleSubmitContestEntry from "../Handler/Contest_entry_handler.ts";


Deno.serve(async (req) => {
  if (req.method === "POST") 
    return await handleSubmitContestEntry(req);
  

  return new Response(
    JSON.stringify({ error: "Wrong method is using" }), 
    { status: 404 ,headers:{"Content-Type":"Application/json"}});
});
