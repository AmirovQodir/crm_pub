import { FC } from "react";

import { VerticalSortIcon } from "../../common/icons/VerticalSortIcon";
import { HorizontalSortIcon } from "../../common/icons/HorizontalSortIcon";
import './styles.scss';

export enum SORT_ENUM {
    VERTICAL,
    HORIZONTAL
}

export const Sort: FC<{onChange: (value: SORT_ENUM) => void, current: SORT_ENUM}> = ({onChange, current}) => {
    return <div className="sort">
        <button className={current === SORT_ENUM.VERTICAL ? 'active' : ''} onClick={() => onChange(SORT_ENUM.VERTICAL)}>
            <VerticalSortIcon/>
        </button>
        <button className={current === SORT_ENUM.HORIZONTAL ? 'active' : ''}  onClick={() => onChange(SORT_ENUM.HORIZONTAL)}>
            <HorizontalSortIcon/>
        </button>
    </div>
}