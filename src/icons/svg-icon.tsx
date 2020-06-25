import * as React from 'react';


interface SVGIconProps {
    width: number | string;
    height: number | string;
    url: string;
}

export class SVGIcon extends React.Component<SVGIconProps> {

    shouldComponentUpdate(newProps: SVGIconProps) {
        const sameHeight = this.props.height === newProps.height;
        const sameWidth = this.props.width === newProps.width;
        const sameUrl = this.props.url === newProps.url;
        return (sameHeight && sameWidth && sameUrl) === false;
    }

    render() {
        return (
            <svg width={this.props.width} height={this.props.height}>
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`${this.props.url}`} />
            </svg>
        );
    }
}
