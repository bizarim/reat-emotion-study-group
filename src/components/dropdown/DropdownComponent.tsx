import React from 'react';
import { Dropdown } from 'react-bootstrap';

type DropdownElem = number | string | React.ReactNode;

export interface DropdownComponentProps {
    list: DropdownElem[];
    onSelect?: (index: number) => void;
    placeholder?: string;
}

interface DropdownComponentState {
    selected: string;
    selectedIndex: string;
}

export class DropdownComponent extends React.Component<DropdownComponentProps & {}, DropdownComponentState> {
    constructor(props: DropdownComponentProps) {
        super(props);
        const selectedValue = this.props.placeholder || this.convertToString(this.props.list[0]);
        this.state = {
            selected: selectedValue,
            selectedIndex: '0',
        };
    }

    public render() {
        const { selected } = this.state;
        const { list } = this.props;

        return (
            <div className="cr-dropdown">
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {selected}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {list.map((elem, index) => this.renderElem(elem, index))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }

    private renderElem = (elem: DropdownElem, index: number) => {
        return  (
            <Dropdown.Item
                key={index}
                onSelect={ (eventKey: any, e?: React.SyntheticEvent<unknown>) => this.handleSelect(elem, index)}
            >
                {elem}
            </Dropdown.Item>
        );
    }

    private handleSelect = (elem: DropdownElem, index: number) => {
        this.props.onSelect && this.props.onSelect(index);
        this.setState({
            selected: this.convertToString(elem),
            selectedIndex: index.toString(),
        });
    };

    private convertToString = (elem: DropdownElem) => {
        if (elem !== undefined && elem !== null) {
            return elem.toString();
        }
        return '';
    };
}
