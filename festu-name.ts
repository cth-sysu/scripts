
// Original bash script:
// curl -s -H "Authorization: Bearer $2" "https://festu.se/api/members/name?mail=$1" | jq -r ".name"

const headers = { authorization: `Bearer ${Deno.args[1]}` };
const res = await fetch(`https://festu.se/api/members/name?mail=${Deno.args[0]}`, { headers });
if (!res.ok) {
  Deno.exit(1);
}
const { name } = await res.json();
console.log(name);
