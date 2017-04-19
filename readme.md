# devicePixelRatio Detector

An EventEmitter to detect window.devicePixelRatio changes

## Usage

```javascript
import { devicePixelRatioDetector } from './device-pixel-ratio-detector'

const detector = new devicePixelRatioDetector()
detector.on('change', devicePixelRatio => console.log(devicePixelRatio))
```
