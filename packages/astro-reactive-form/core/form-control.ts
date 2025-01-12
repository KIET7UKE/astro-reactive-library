import type { FormControlType, Button, Checkbox, FormControlBase, Radio, Submit } from "../types";

export class FormControl {
	private _name: string = '';
	private _type?: FormControlType | undefined = 'text';
	private _value?: string | number | null | string[];
	private _label?: string;
	private _labelPosition?: 'right' | 'left' = 'left';

	constructor(config: FormControlBase | Checkbox | Radio | Submit | Button) {
		const { name, type, value, label, labelPosition } = config;
		this._name = name;
		this._type = type || 'text';
		this._value = value || null;
		this._label = label || '';
		this._labelPosition = labelPosition || 'left';
	}

	get name() {
		return this._name;
	}

	get type() {
		return this._type;
	}

	get value() {
		return this._value;
	}

	get label() {
		return this._label;
	}

	get labelPosition() {
		return this._labelPosition;
	}

	setValue(value: string) {
		this._value = value;
	}

}
