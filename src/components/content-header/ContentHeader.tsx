import React, { useContext, useState } from "react";
import { FC } from "react";

import './styles.scss';
import { BackIcon } from "../../common/icons/BackIcon";
import { useNavigate } from "react-router-dom";
import { ContentHeaderContext, IContentHeader } from "../../common/contexts";

interface IContentHeaderProps {
    children: React.ReactNode;
    hasBackAction?: boolean
}

export const ContentHeader: FC<IContentHeaderProps> = ({children, hasBackAction}) => {

    const { label } = useContext(ContentHeaderContext) as IContentHeader;

    const navigate = useNavigate();
    const [breadcrumb, sort, pagination] = React.Children.toArray(children);

    return (
        <div className="content-header">
            <div className="content-header__row content-header__row--1">
            {hasBackAction && <button onClick={() => navigate(-1)} className="button"><BackIcon/></button>}
                <div className="label">{label}</div>
                {sort}
            </div>
            <div className="content-header__row content-header__row--2">
                {breadcrumb}
                <div className="pagination">
                    {pagination}
                </div>
            </div>
        </div>
      );
}