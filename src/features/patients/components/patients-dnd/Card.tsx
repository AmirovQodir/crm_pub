import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { ClipboardIcon } from "../../../../common/icons/ClipboardIcon";
import { PlaneIcon } from "../../../../common/icons/PlaneIcon";

export const Card = ({ id, text, index, columnIndex, moveCard }: any) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: "CARD",
    item: { id, index, columnIndex, nimadir: 777 },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;
  return (
    <div ref={drag} className="card" style={{ opacity }}>
      <div className="card__title">Борисова 
        Ольга</div>
      <div className="card__subtitle">36 лет, Ташкент, Хан Анна</div>

      <div className="card__content">

        <div className="card__step">
          <div className="card__step--iconbox">
            <div className="step__icon">
              <ClipboardIcon />
            </div>
            <div className="step__divider"></div>
          </div>
          <div className="step__content">
            <div className="step__title">
              <div className="step__name">Диагноз</div>
              <div className="step__date">10.01</div>
            </div>
            <div className="step__info">
              Обратился с диагнозом “Птоз”
            </div>
          </div>
        </div>

        <div className="card__step">
          <div className="card__step--iconbox">
            <div className="step__icon">
              <PlaneIcon />
            </div>
            <div className="step__divider--last"></div>
          </div>
          <div className="step__content">
            <div className="step__title">
              <div className="step__name">Вылет</div>
              <div className="step__date">30.01</div>
            </div>
            <div className="step__info">
              Вылет пациента в клинику
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};