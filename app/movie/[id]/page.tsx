import React from "react";

export default function MovieDescriptionPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  console.log(id);
  return <div>Dewscription for Id: {id}</div>;
}
