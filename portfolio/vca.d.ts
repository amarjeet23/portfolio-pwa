declare module 'vue/types/index' {
    export * from 'vue/types/options'
    export * from 'vue/types/vue'
    export * from 'vue/types/plugin'
    export * from 'vue/types/vnode'
  
    export type Prop<T> = { (): T } | { new(...args: never[]): T & object } | { new(...args: string[]): Function }
    export type PropType<T> = Prop<T> | Prop<T>[];
    export type PropValidator<T> = PropOptions<T> | PropType<T>;
    export interface PropOptions<T=any> {
      type?: PropType<T>;
      required?: boolean;
      default?: T | null | undefined | (() => T | null | undefined);
      validator?(value: T): boolean;
    }
  }
  
  
  declare module 'vue/types/umd' {
    import V, { Vue } from 'vue/types/index'
    import {
      DefaultData,
      DefaultProps,
      DefaultMethods,
      DefaultComputed,
      PropsDefinition
    } from "vue/types/options"; 
  
    // vue.d.ts
    export type CreateElement = V.CreateElement;
    export type VueConstructor<V extends Vue = Vue> = V.VueConstructor<V>;
  
    // options.d.ts
    export type Component<Data=DefaultData<never>, Methods=DefaultMethods<never>, Computed=DefaultComputed, Props=DefaultProps> = V.Component<Data, Methods, Computed, Props>;
    export type AsyncComponent<Data=DefaultData<never>, Methods=DefaultMethods<never>, Computed=DefaultComputed, Props=DefaultProps> = V.AsyncComponent<Data, Methods, Computed, Props>;
    export type ComponentOptions<V extends Vue, Data=DefaultData<V>, Methods=DefaultMethods<V>, Computed=DefaultComputed, PropsDef=PropsDefinition<DefaultProps>, Props=DefaultProps> = V.ComponentOptions<V, Data, Methods, Computed, PropsDef, Props>;
    export type FunctionalComponentOptions<Props = DefaultProps, PropDefs = PropsDefinition<Props>> = V.FunctionalComponentOptions<Props, PropDefs>;
    export type RenderContext<Props=DefaultProps> = V.RenderContext<Props>;
    export type PropType<T> = V.PropType<T>;
    export type PropOptions<T=any> = V.PropOptions<T>;
    export type ComputedOptions<T> = V.ComputedOptions<T>;
    export type WatchHandler<T> = V.WatchHandler<T>;
    export type WatchOptions = V.WatchOptions;
    export type WatchOptionsWithHandler<T> = V.WatchOptionsWithHandler<T>;
    export type DirectiveFunction = V.DirectiveFunction;
    export type DirectiveOptions = V.DirectiveOptions;
  
    // plugin.d.ts
    export type PluginFunction<T> = V.PluginFunction<T>;
    export type PluginObject<T> = V.PluginObject<T>;
  
    // vnode.d.ts
    export type VNodeChildren = V.VNodeChildren;
    export type VNodeChildrenArrayContents = V.VNodeChildrenArrayContents;
    export type VNode = V.VNode;
    export type VNodeComponentOptions = V.VNodeComponentOptions;
    export type VNodeData = V.VNodeData;
    export type VNodeDirective = V.VNodeDirective;
  }