export async function POST() {
  const apiKey =
    "eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiJkMDc2ODNlMi0yMjBhLTRlYzEtYWE3My01MzMzYTY1OGY4OGQiLCJzdWIiOiIxNDYzIiwiaWF0IjoxNzEyMTM4MTc3LCJleHAiOjIwMjc2NzA5NzcsInBtIjoiREFGLFBBRiIsInR0IjoiQUFUIn0.Cvk3wn2_apieYV3YttYIhLhmnyyB6Uf82O6OhFvx4uE"

  const resp = await fetch(`https://api.sandbox.pawapay.cloud/deposits`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      depositId: "e9f30085-63fd-4afd-9322-4b02793ae0d3",
      amount: "200",
      currency: "XAF",
      correspondent: "ORANGE_CMR",
      payer: {
        type: "MSISDN",
        address: { value: "237693303372" },
      },
      customerTimestamp: "2020-02-21T17:32:28Z",
      statementDescription: "Note of 4 to 22 chars",
    }),
  })

  const data = await resp.json()

  console.log(data)

  return Response.json({ data })
}
