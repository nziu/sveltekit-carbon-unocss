import { extractorSvelte } from '@unocss/core';
import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  extractors: [extractorSvelte],
  presets: [presetUno(), presetAttributify()]
});
