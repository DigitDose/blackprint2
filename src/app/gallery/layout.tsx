import React from "react";

export default function GalleryLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {/* Inne elementy layoutu, np. nawigacja */}

      <div className="container  mx-auto">{props.children}</div>
      {props.modal}
      {/* Modal */}
    </>
  );
}
