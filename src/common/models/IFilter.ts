export interface IFilter {
    label: string,
    value: string,
    children?: IFilter[]
}