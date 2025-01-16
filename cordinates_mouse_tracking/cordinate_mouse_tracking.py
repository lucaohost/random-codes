import pyautogui
import time

try:
    while True:
        x, y = pyautogui.position()
        print(f"Mouse position: (x:{x}, y:{y})")
        time.sleep(1)
        print("Press Ctrl+C to stop.")
except KeyboardInterrupt:
    print("\nTracking stopped.")
