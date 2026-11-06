import React from "react";
import Action from "../../Action";
import Cluar from "../../../common/Cluar";
import config from "./config.json";
import "./index.less";

function Minimal({
  section,
  type,
  image,
  image_title,
  image_alt,
  title,
  content,
  html_content,
  edit_mode,
  position,
  actions,
}) {
  const backgroundPositionX = position.x !== "" ? position.x : "50%";
  const backgroundPositionY = position.y !== "" ? position.y : "50%";
  const imageSrc =
    image?.indexOf("base64") === -1
      ? `/cluar/images/page_${section}/${image}`
      : image;

  const resolvedContent =
    edit_mode === "html" ? (html_content || content) : content;

  return (
    <section className="banner">
      <div
        className="banner__minimal"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundPositionX,
          backgroundPositionY,
        }}
      >
        <div className="banner__wrapper">
          {/* texto fixo, não vem do drawer */}
          <p className="banner__badge">Escola e Estúdio desde 1998</p>

          <h1
            data-sal="slide-down"
            data-sal-duration="2000"
            data-sal-easing="ease-out-cubic"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-easing="ease-out-cubic"
            dangerouslySetInnerHTML={{ __html: resolvedContent }}
          />
          {config.action && (
            <div className="banner__actions">
              <Action {...{ section, type, actions }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Minimal;