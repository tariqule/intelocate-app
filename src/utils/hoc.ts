

type Branch = <P>(
    test: (props: P) => boolean,
    left: (props: P) => JSX.Element,
    right: (props: P) => JSX.Element
) => (props: P) => JSX.Element;

export const branch: Branch = (test, left, right) => props => (
    test(props) ? left(props) : right(props)
);
