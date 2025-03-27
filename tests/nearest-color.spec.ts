import { describe, it, expect } from 'vitest';
import { nearestColor } from 'src/nearest-color';

describe('', () => {
  it('teste que la couleur la plus proche de F00 est F00', () => {
    expect(nearestColor('F00')).toEqual('F00');
  });
  it('teste que la couleur la plus proche de 0F0 est 0F0', () => {
    expect(nearestColor('0F0')).toEqual('0F0');
  });

  it('teste que la couleur la plus proche de F42 est F00', () => {
    expect(nearestColor('F42')).toEqual('F00');
  });

  it('teste que la couleur la plus proche de 00F est 00F', () => {
    expect(nearestColor('00F')).toEqual('00F');
  });
});
