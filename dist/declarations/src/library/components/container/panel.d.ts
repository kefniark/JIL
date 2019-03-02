import { VNode, Projector } from 'maquette';
import { JilNode, Transform, TransformTween, Factory, Layout } from '../../behaviours';
import { JilCanvas } from './canvas';
import { JilButton } from '../element/button';
import { JilImage } from '../element/image';
import { JilText } from '../element/text';
import { JilRadio } from '../element/radio';
import { JilCheckbox } from '../element/checkbox';
import { JilSelect } from '../element/select';
import { JilInput } from '../element/input';
export interface JilPanel extends JilNode, Transform, Factory, TransformTween, Layout {
}
export declare class JilPanel {
    this: any;
    classnames: string;
    constructor(id: string, params: any, parent: JilNode, projector: Projector | undefined);
    createPanel: (id: string, params?: any) => JilPanel;
    createButton: (id: string, params?: any) => JilButton;
    createImage: (id: string, params?: any) => JilImage;
    createText: (id: string, params?: any) => JilText;
    createCanvas: (id: string, params?: any) => JilCanvas;
    createRadio: (id: string, params?: any) => JilRadio;
    createCheckbox: (id: string, params?: any) => JilCheckbox;
    createSelect: (id: string, params?: any) => JilSelect;
    createInput: (id: string, params?: any) => JilInput;
    refreshLayout(): void;
    render(): VNode;
}
