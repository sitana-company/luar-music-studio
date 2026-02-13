import React, { useState, useEffect } from 'react';
import Cluar from "../../common/Cluar";

import "./index.less";
import Default from './Default';
import ThreeItems from './ThreeItems';
import CardImage from './CardImage';
import CircleImage from './CircleImage';
import RectangleImage from './RectangleImage';

function Listing(props) {
  const [renderedActions, setRenderedActions] = useState(props.actions);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const actionsData = Cluar.actions() || [];
  const actions = (props.action_uids || [])
    .map(uid => actionsData.find(item => item.uid === uid))
    .filter(Boolean);

  useEffect(() => {
    if (!isFirstRender) {
      setRenderedActions(actions);
    } else {
      setIsFirstRender(false);
    }
  }, [props.action_uids]);

  let listLayout = null;

  if (props.type === "Default") {
    listLayout = (
      <Default
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === "ThreeItems") {
    listLayout = (
      <ThreeItems
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === "CardImage") {
    listLayout = (
      <CardImage
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === "CircleImage") {
    listLayout = (
      <CircleImage
        {...props}
        actions={renderedActions}
      />
    );
  } else if (props.type === "RectangleImage") {
    listLayout = (
      <RectangleImage
        {...props}
        actions={renderedActions}
      />
    );
  } else {
    listLayout = (
      <Default
        {...props}
        actions={renderedActions}
      />
    );
  }

  return <section className={props.type === "RectangleImage" ? "" : "listing"}>{listLayout}</section>;
}

export default Listing;