'use client'
import Popover from '../popover'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import useTheme from '../use-theme'
import { addColorAlpha } from '../utils/color'
import { INavigationItem } from './index'

export interface NavigationItemProps extends INavigationItem {
  onClick?: () => void
}

const NavigationItem: React.FC<PropsWithChildren<NavigationItemProps>> = ({
  url = '/',
  ...props
}) => {
  const theme = useTheme()

  const handleClick = (e: any) => {
    if (props.onClick) {
      e.preventDefault()
      props.onClick()
    }
  }
  // const rgba = `rgba(${hexToRgb(theme.palette.accents_2)}, 0.5)`

  return (
    <>
      <Popover.Item padding="6px">
        <Link legacyBehavior passHref href={url || ''}>
          <a onClick={e => handleClick(e)} className="sub-item">
            <div className="icon-with-title">
              {props.icon && <span className="icon-holder">{props.icon}</span>}
              <span>{props.title}</span>
            </div>
          </a>
        </Link>
      </Popover.Item>
      <style jsx>{`
        .sub-item {
          font-weight: 500;
          min-width: 120px;
          padding: 6px 12px;
          font-size: 14px;
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          width: 100%;
        }

        .icon-holder {
          width: 16px;
          display: inline-flex;
          align-items: center;
        }

        :global(.icon-holder > *) {
          width: 100%;
        }
        // .sub-item:hover {
        //   background: ${addColorAlpha(theme.palette.accents_2, 0.5)};
        //   border-radius: 5px;
        // }
        .icon-with-title {
          color: ${theme.palette.accents_5};
          display: inline-flex;
          gap: 6px;
          align-items: center;
        }
      `}</style>
    </>
  )
}
NavigationItem.displayName = 'Item'
export default NavigationItem