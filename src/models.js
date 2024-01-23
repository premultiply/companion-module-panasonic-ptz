import { e } from './enum.js'

export const MODELS = [
	{ id: 'Auto', series: 'Auto', label: 'Auto Detect' },
	{ id: 'AW-HE2', series: 'HE2', label: 'AW-HE2' },
	{ id: 'AW-HE20', series: 'UE20', label: 'AW-HE20' },
	{ id: 'AW-HE35', series: 'HE40', label: 'AW-HE35' },
	{ id: 'AW-HE38', series: 'HE40', label: 'AW-HE38' },
	{ id: 'AW-HE40', series: 'HE40', label: 'AW-HE40' },
	{ id: 'AW-HE42', series: 'HE42', label: 'AW-HE42' },
	{ id: 'AW-HE48', series: 'HE40', label: 'AW-HE48' },
	{ id: 'AW-HE50', series: 'HE50', label: 'AW-HE50' },
	{ id: 'AW-HE58', series: 'HE40', label: 'AW-HE58' },
	{ id: 'AW-HE60', series: 'HE60', label: 'AW-HE60' },
	{ id: 'AW-HE65', series: 'HE40', label: 'AW-HE65' },
	{ id: 'AW-HE68', series: 'HE42', label: 'AW-HE68' },
	{ id: 'AW-HE70', series: 'HE40', label: 'AW-HE70' },
	{ id: 'AW-HE75', series: 'HE42', label: 'AW-HE75' },
	{ id: 'AW-HE120', series: 'HE120', label: 'AW-HE120' },
	{ id: 'AW-HE130', series: 'HE130', label: 'AW-HE130' },
	{ id: 'AW-HE145', series: 'UE150', label: 'AW-HE145' },
	{ id: 'AW-HN38', series: 'HE40', label: 'AW-HN38' },
	{ id: 'AW-HN40', series: 'HE40', label: 'AW-HN40' },
	{ id: 'AW-HN65', series: 'HE40', label: 'AW-HN65' },
	{ id: 'AW-HN130', series: 'HE130', label: 'AW-HN130' },
	{ id: 'AW-HR140', series: 'HR140', label: 'AW-HR140' },
	{ id: 'AW-UE4', series: 'UE4', label: 'AW-UE4' },
	{ id: 'AW-UE20', series: 'UE20', label: 'AW-UE20' },
	{ id: 'AW-UE40', series: 'UE80', label: 'AW-UE40' },
	{ id: 'AW-UE50', series: 'UE80', label: 'AW-UE50' },
	{ id: 'AW-UE63', series: 'UE70', label: 'AW-UE63' },
	{ id: 'AW-UE65', series: 'UE70', label: 'AW-UE65' },
	{ id: 'AW-UE70', series: 'UE70', label: 'AW-UE70' },
	{ id: 'AW-UE80', series: 'UE80', label: 'AW-UE80' },
	{ id: 'AW-UE100', series: 'UE150', label: 'AW-UE100' },
	{ id: 'AW-UE150', series: 'UE150', label: 'AW-UE150' },
	{ id: 'AW-UE155', series: 'UE150', label: 'AW-UE155' },
	{ id: 'AW-UE160', series: 'UE160', label: 'AW-UE160' },
	{ id: 'AW-UN70', series: 'UE70', label: 'AW-UN70' },
	{ id: 'AW-UN145', series: 'UE150', label: 'AW-UN145' },
	{ id: 'AW-UR100', series: 'UE150', label: 'AW-UR100' },
	{ id: 'AK-UB300', series: 'UB300', label: 'AK-UB300' },
	{ id: 'AG-CX350', series: 'CX350', label: 'AG-CX350' },
	{ id: 'AG-CX200', series: 'CX350', label: 'AG-CX200' },
	{ id: 'AJ-UPX360', series: 'CX350', label: 'AJ-UPX360' },
	{ id: 'AJ-CX4000', series: 'CX350', label: 'AJ-CX4000' },
	{ id: 'AJ-UPX900', series: 'CX350', label: 'AJ-UPX900' },
	{ id: 'Other', series: 'Other', label: 'Other Cameras' },
]

// list of all Series:
// Other
// HE2
// HE40
// HE42
// HE50
// HE60
// HE120
// HE130
// UE20 *** ToDo ***
// UE70
// UE80 *** ToDo ***
// UE150
// UE160
// HR140
// UE4
// UB300
// CX350

export const SERIES_SPECS = [
	{
		// Includes all Actions / Variables / Feedbacks
		id: 'Other',
		capabilities: {
			colorGain: { cmd: { red: 'ORG:', blue: 'OBG:' } }, // Has numbered red/blue Gain (ORG and OBG)
			colorPedestal: { cmd: { red: 'ORP:', blue: 'OBP:' } }, // Has numbered red/blue Pedestal (ORP or OBP)
			colorTemp: { dropdown: e.ENUM_COLOR_TEMPERATURE_HE40 }, // Has enumerated Color Temperature Control (OSD:B1)
			colorTempAdv: true, // Has advanced Color Temperature (OSI:20)
			colorbar: true, // Has Color Bar Control (DCB:1 or DCB:0)
			error: true, // Camera can return enumerated error messages (rER)
			filter: { dropdown: e.ENUM_FILTER_OTHER }, // Has ND Filter Support (OFT)
			focus: true, // Has Focus Control (Fxx)
			focusAuto: true, // Has Auto Focus (OAF)
			focusPushAuto: true, // Has Push Auto Focus feature (OSE:69:1)
			gain: { cmd: 'OGS', dropdown: e.ENUM_GAIN_OTHER() }, // Has Gain (OGS/OGU)
			install: true, // Has support for Desktop or Hanging Install Position (iNS1/iNS0)
			iris: true, // Has Iris Control (Ixx)
			irisAuto: true, // Has Auto Iris (d31/d30)
			ois: { dropdown: e.ENUM_OIS_OTHER }, // Has Optical Image Stabilisation Control (OIS)
			panTilt: true, // Has Pan/Tilt Head support (PTSxx)
			pedestal: { cmd: 'OSJ:0F:', dropdown: e.ENUM_PEDESTAL_OTHER() }, // Has Master Pedestal (OTD, OSJ:0F or OSG:4A)
			power: true, // Has Power Control (p1/p0 and O1/O0)
			preset: true, // Has Preset operations (Mxxx, Rxxx and Cxxx) and states (sXX and qXX)
			presetSpeed: true, // Has Preset Recall Speed Control (UPVSxx)
			presetTime: true, // Has additional Preset Recall Time Control (UPVSxx and OSJ:29:1)
			recordSD: true, // Has SD Card Recording Control (sdctrl?save=start or sdctrl?save=end)
			shutter: { dropdown: e.ENUM_SHUTTER_OTHER }, // Has Shutter Support (OSH)
			shutterAdv: true, // Has modern shutter mode selection, Inc/Dec step control and numeric state (OSJ:03 - OSJ:06)
			streamRTMP: true, // Has RTMP (Client) Streaming Control (rtmp_ctrl?cmd=start or rtmp_ctrl?cmd=stop)
			streamSRT: true, // Has SRT (Caller) Streaming Control (srt_ctrl?cmd=start or srt_ctrl?cmd=stop)
			subscription: true, // Camera supports subscription to TCP-based event notification
			tally2: true, // Has Green Tally (TLG)
			tally3: true, // Has Yellow Tally (TLY)
			tally: true, // Has Red Tally (TLR or DA1/DA0)
			trackingAuto: true, // Has Autotracking features (OSL:B6 - OSL:C2)
			version: true, // Camera sends a firmware version string every minute (qSV3)
			whiteBalance: { dropdown: e.ENUM_WHITEBALANCE_SET },  // Has White Balance Modes (OAW)
			zoom: true, // Has Zoom Control (Zxx)
		},
	},

	{
		// Specific for the HE40 Series
		id: 'HE40',
		capabilities: {
			colorGain: { cmd: { red: 'ORG:', blue: 'OBG:' } },
			colorPedestal: { cmd: { red: 'ORP:', blue: 'OBP:' } },
			colorTemp: { dropdown: e.ENUM_COLOR_TEMPERATURE_HE40 },
			colorTempAdv: false,
			colorbar: true,
			error: true,
			filter: { dropdown: e.ENUM_FILTER_OTHER },
			focus: true,
			focusAuto: true,
			focusPushAuto: true,
			gain: { cmd: 'OGU:', dropdown: e.ENUM_GAIN_HE40 },
			install: true,
			iris: true,
			irisAuto: true,
			ois: { dropdown: e.ENUM_OIS_OTHER },
			panTilt: true,
			pedestal: { cmd: 'OTP:', dropdown: e.ENUM_PEDESTAL_HE40() },
			power: true,
			preset: true,
			presetSpeed: true,
			presetTime: false,
			recordSD: true,
			shutter: { cmd: 'OSH:', dropdown: e.ENUM_SHUTTER_HE40 },
			shutterAdv: false,
			streamRTMP: false,
			streamSRT: false,
			subscription: true,
			tally2: false,
			tally3: false,
			tally: true,
			trackingAuto: false,
			version: true,
			whiteBalance: { dropdown: e.ENUM_WHITEBALANCE_SET }, 
			zoom: true,
		},
	},

	{
		// Specific for the HE42 Series
		id: 'HE42',
		capabilities: {
			colorGain: null,
			colorPedestal: null,
			colorTemp: { dropdown: e.ENUM_COLOR_TEMPERATURE_HE40 },
			colorTempAdv: false,
			colorbar: true,
			error: true,
			filter: { dropdown: e.ENUM_FILTER_3A },
			focus: true,
			focusAuto: true,
			focusPushAuto: true,
			gain: { cmd: 'OGU:', dropdown: e.ENUM_GAIN_HE40 },
			install: true,
			iris: true,
			irisAuto: true,
			ois: { dropdown: e.ENUM_OIS_OTHER },
			panTilt: true,
			pedestal: { cmd: 'OTP:', dropdown: e.ENUM_PEDESTAL_HE40() },
			power: true,
			preset: true,
			presetSpeed: true,
			presetTime: false,
			recordSD: true,
			shutter: { cmd: 'OSH:', dropdown: e.ENUM_SHUTTER_HE40 },
			shutterAdv: false,
			streamRTMP: false,
			streamSRT: false,
			subscription: true,
			tally2: false,
			tally3: false,
			tally: true,
			trackingAuto: false,
			version: true,
			whiteBalance: { dropdown: e.ENUM_WHITEBALANCE_SET },
			zoom: true,
		},
	},

	{
		// Specific for the UE70 Series
		id: 'UE70',
		capabilities: {
			colorGain: null,
			colorPedestal: null,
			colorTemp: { dropdown: e.ENUM_COLOR_TEMPERATURE_HE40 },
			colorTempAdv: false,
			colorbar: true,
			error: true,
			filter: { dropdown: e.ENUM_FILTER_3A },
			focus: true,
			focusAuto: true,
			focusPushAuto: true,
			gain: { cmd: 'OGU:', dropdown: e.ENUM_GAIN_HE40 },
			install: true,
			iris: true,
			irisAuto: false,
			ois: { dropdown: e.ENUM_OIS_OTHER },
			panTilt: true,
			pedestal: { cmd: 'OTP:', dropdown: e.ENUM_PEDESTAL_HE40() },
			power: true,
			preset: true,
			presetSpeed: true,
			presetTime: false,
			recordSD: true,
			shutter: { cmd: 'OSH:', dropdown: e.ENUM_SHUTTER_HE40 },
			shutterAdv: false,
			streamRTMP: false,
			streamSRT: false,
			subscription: true,
			tally2: false,
			tally3: false,
			tally: true,
			trackingAuto: false,
			version: true,
			whiteBalance: { dropdown: e.ENUM_WHITEBALANCE_SET }, 
			zoom: true,
		},
	},

	{
		// Specific for the UE150 Series
		id: 'UE150',
		capabilities: {
			colorGain: null,
			colorPedestal: null,
			colorTemp: { dropdown: e.ENUM_COLOR_TEMPERATURE_HE40 },
			colorTempAdv: true,
			colorbar: true,
			error: true,
			filter: { dropdown: e.ENUM_FILTER_3 },
			focus: true,
			focusAuto: true,
			focusPushAuto: true,
			gain: { cmd: 'OGU:', dropdown: e.ENUM_GAIN_UE150 },
			install: true,
			iris: true,
			irisAuto: false,
			ois: { dropdown: e.ENUM_OIS_OTHER },
			panTilt: true,
			pedestal: { cmd: 'OSJ:0F:', dropdown: e.ENUM_PEDESTAL_UE150() },
			power: true,
			preset: true,
			presetSpeed: true,
			presetTime: true,
			recordSD: false,
			shutter: { cmd: 'OSJ:06:', dropdown: e.ENUM_SHUTTER_UE150 },
			shutterAdv: false,
			streamRTMP: true,
			streamSRT: true,
			subscription: true,
			tally2: true,
			tally3: false,
			tally: true,
			trackingAuto: false,
			version: true,
			whiteBalance: { dropdown: e.ENUM_WHITEBALANCE_SET }, 
			zoom: true,
		},
	},

	{
		// Specific for the UE150 Series
		id: 'UE160',
		capabilities: {
			colorGain: null,
			colorPedestal: null,
			colorTemp: { dropdown: e.ENUM_COLOR_TEMPERATURE_HE40 },
			colorTempAdv: false,
			colorbar: true,
			error: true,
			filter: { dropdown: e.ENUM_FILTER_3 },
			focus: true,
			focusAuto: true,
			focusPushAuto: true,
			gain: { cmd: 'OGU:', dropdown: e.ENUM_GAIN_UE160 },
			install: true,
			iris: true,
			irisAuto: false,
			ois: { dropdown: e.ENUM_OIS_UE160 },
			panTilt: true,
			pedestal: { cmd: 'OSJ:0F:', dropdown: e.ENUM_PEDESTAL_UE150() },
			power: true,
			preset: true,
			presetSpeed: true,
			presetTime: true,
			recordSD: false,
			shutter: { cmd: 'OSJ:06:', dropdown: e.ENUM_SHUTTER_UE150 },
			shutterAdv: false,
			streamRTMP: false,
			streamSRT: false,
			subscription: true,
			tally2: true,
			tally3: true,
			tally: true,
			trackingAuto: false,
			version: true,
			whiteBalance: { dropdown: e.ENUM_WHITEBALANCE_SET }, 
			zoom: true,
		},
	},

	{
		// Specific for the AW-HE2 Camera
		id: 'HE2', // A lot has been turned off since it will need custop setups for this camera, can be added if requested
		capabilities: {
			colorGain: null,
			colorPedestal: null,
			colorTemp: { dropdown: e.ENUM_COLOR_TEMPERATURE_HE40 },
			colorTempAdv: false,
			colorbar: true,
			error: true,
			filter: { dropdown: e.ENUM_FILTER_OTHER },
			focus: false,
			focusAuto: false,
			focusPushAuto: false,
			gain: { cmd: 'OGS', dropdown: e.ENUM_GAIN_OTHER() },
			install: false,
			iris: true, // Might not work correctly (Auto/Manual should work though)
			irisAuto: false,
			ois: { dropdown: e.ENUM_OIS_OTHER },
			panTilt: true,
			pedestal: { cmd: 'OSJ:0F:', dropdown: e.ENUM_PEDESTAL_OTHER() },
			power: true,
			preset: true,
			presetSpeed: false,
			presetTime: false,
			recordSD: false,
			shutter: { dropdown: e.ENUM_SHUTTER_OTHER },
			shutterAdv: false,
			streamRTMP: false,
			streamSRT: false,
			subscription: true,
			tally2: false,
			tally3: false,
			tally: true,
			trackingAuto: false,
			version: true,
			whiteBalance: { dropdown: e.ENUM_WHITEBALANCE_SET }, 
			zoom: true,
		},
	},

	{
		// Specific for the AW-HE50 Camera
		id: 'HE50',
		capabilities: {
			colorGain: null,
			colorPedestal: null,
			colorTemp: { dropdown: e.ENUM_COLOR_TEMPERATURE_HE40 },
			colorTempAdv: false,
			colorbar: true,
			error: true,
			filter: { dropdown: e.ENUM_FILTER_OTHER },
			focus: true,
			focusAuto: true,
			focusPushAuto: true,
			gain: { cmd: 'OGU:', dropdown: e.ENUM_GAIN_HE50 },
			install: true,
			iris: true,
			irisAuto: false,
			ois: false,
			panTilt: true,
			pedestal: { cmd: 'OTP:', dropdown: e.ENUM_PEDESTAL_HE40() },
			power: true,
			preset: true,
			presetSpeed: true,
			presetTime: false,
			recordSD: false,
			shutter: { cmd: 'OSH:', dropdown: e.ENUM_SHUTTER_HE40 },
			shutterAdv: false,
			streamRTMP: false,
			streamSRT: false,
			subscription: true,
			tally2: false,
			tally3: false,
			tally: true,
			trackingAuto: false,
			version: true,
			whiteBalance: { dropdown: e.ENUM_WHITEBALANCE_SET }, 
			zoom: true,
		},
	},

	{
		// Specific for the AW-HE60 Camera
		id: 'HE60',
		capabilities: {
			colorGain: null,
			colorPedestal: null,
			colorTemp: { dropdown: e.ENUM_COLOR_TEMPERATURE_HE40 },
			colorTempAdv: false,
			colorbar: true,
			error: true,
			filter: { dropdown: e.ENUM_FILTER_OTHER },
			focus: true,
			focusAuto: true,
			focusPushAuto: true,
			gain: { cmd: 'OGU:', dropdown: e.ENUM_GAIN_HE50 },
			install: true,
			iris: true,
			irisAuto: true,
			ois: false,
			panTilt: true,
			pedestal: { cmd: 'OTP:', dropdown: e.ENUM_PEDESTAL_HE40() },
			power: true,
			preset: true,
			presetSpeed: true,
			presetTime: false,
			recordSD: false,
			shutter: { cmd: 'OSH:', dropdown: e.ENUM_SHUTTER_HE40 },
			shutterAdv: false,
			streamRTMP: false,
			streamSRT: false,
			subscription: true,
			tally2: false,
			tally3: false,
			tally: true,
			trackingAuto: false,
			version: true,
			whiteBalance: { dropdown: e.ENUM_WHITEBALANCE_SET }, 
			zoom: true,
		},
	},

	{
		// Specific for the AW-HE120 Camera
		id: 'HE120',
		capabilities: {
			colorGain: null,
			colorPedestal: null,
			colorTemp: { dropdown: e.ENUM_COLOR_TEMPERATURE_HE40 },
			colorTempAdv: false,
			colorbar: true,
			error: true,
			filter: { dropdown: e.ENUM_FILTER_3 },
			focus: true,
			focusAuto: true,
			focusPushAuto: true,
			gain: { cmd: 'OGU:', dropdown: e.ENUM_GAIN_HE120 },
			install: true,
			iris: true,
			irisAuto: false,
			ois: false,
			panTilt: true,
			pedestal: { cmd: 'OTP:', dropdown: e.ENUM_PEDESTAL_HE120() },
			power: true,
			preset: true,
			presetSpeed: true,
			presetTime: false,
			recordSD: false,
			shutter: { cmd: 'OSH:', dropdown: e.ENUM_SHUTTER_HE120 },
			shutterAdv: false,
			streamRTMP: false,
			streamSRT: false,
			subscription: true,
			tally2: false,
			tally3: false,
			tally: true,
			trackingAuto: false,
			version: true,
			whiteBalance: { dropdown: e.ENUM_WHITEBALANCE_SET }, 
			zoom: true,
		},
	},

	{
		// Specific for the AW-HE130 Camera
		id: 'HE130',
		capabilities: {
			colorGain: null,
			colorPedestal: null,
			colorTemp: { dropdown: e.ENUM_COLOR_TEMPERATURE_HE130 },
			colorTempAdv: false,
			colorbar: true,
			error: true,
			filter: { dropdown: e.ENUM_FILTER_2 },
			focus: true,
			focusAuto: true,
			focusPushAuto: true,
			gain: { cmd: 'OGU:', dropdown: e.ENUM_GAIN_HE130 },
			install: true,
			iris: true,
			irisAuto: true,
			ois: { dropdown: e.ENUM_OIS_OTHER },
			panTilt: true,
			pedestal: { cmd: 'OTP:', dropdown: e.ENUM_PEDESTAL_HE120() },
			power: true,
			preset: true,
			presetSpeed: true,
			presetTime: false,
			recordSD: false,
			shutter: { cmd: 'OSH:', dropdown: e.ENUM_SHUTTER_HE130 },
			shutterAdv: false,
			streamRTMP: false,
			streamSRT: false,
			subscription: true,
			tally2: false,
			tally3: false,
			tally: true,
			trackingAuto: false,
			version: true,
			whiteBalance: { dropdown: e.ENUM_WHITEBALANCE_SET }, 
			zoom: true,
		},
	},

	{
		// Specific for the AW-HR140 Camera
		id: 'HR140',
		capabilities: {
			colorGain: null,
			colorPedestal: null,
			colorTemp: { dropdown: e.ENUM_COLOR_TEMPERATURE_HE130 },
			colorTempAdv: false,
			colorbar: true,
			error: true,
			filter: { dropdown: e.ENUM_FILTER_2 },
			focus: true,
			focusAuto: true,
			focusPushAuto: true,
			gain: { cmd: 'OGU:', dropdown: e.ENUM_GAIN_HR140 },
			install: true,
			iris: true,
			irisAuto: true,
			ois: { dropdown: e.ENUM_OIS_HR140 },
			panTilt: true,
			pedestal: { cmd: 'OTP:', dropdown: e.ENUM_PEDESTAL_HE120() },
			power: true,
			preset: true,
			presetSpeed: true,
			presetTime: false,
			recordSD: false,
			shutter: { cmd: 'OSH:', dropdown: e.ENUM_SHUTTER_HE130 },
			shutterAdv: false,
			streamRTMP: false,
			streamSRT: false,
			subscription: true,
			tally2: false,
			tally3: false,
			tally: true,
			trackingAuto: false,
			version: true,
			whiteBalance: { dropdown: e.ENUM_WHITEBALANCE_SET }, 
			zoom: true,
		},
	},

	{
		// Specific for the AW-UE4 Camera
		id: 'UE4', // A lot has been turned off since it will need custop setups for this camera, can be added if requested
		capabilities: {
			colorGain: null,
			colorPedestal: null,
			colorTemp: { dropdown: e.ENUM_COLOR_TEMPERATURE_HE40 },
			colorTempAdv: false,
			colorbar: true,
			error: true,
			filter: { dropdown: e.ENUM_FILTER_OTHER },
			focus: true,
			focusAuto: false,
			focusPushAuto: false,
			gain: { cmd: 'OGU:', dropdown: e.ENUM_GAIN_UE4 },
			install: true,
			iris: false,
			irisAuto: false, // supports only 1 (Auto)
			ois: false,
			panTilt: true,
			pedestal: { cmd: 'OSJ:0F:', dropdown: e.ENUM_PEDESTAL_OTHER() },
			power: true,
			preset: true,
			presetSpeed: false,
			presetTime: false,
			recordSD: false,
			shutter: { cmd: 'OSJ:06:', dropdown: e.ENUM_SHUTTER_UE4 },
			shutterAdv: false,
			streamRTMP: false,
			streamSRT: false,
			subscription: true,
			tally2: false,
			tally3: false,
			tally: true,
			trackingAuto: false,
			version: false,
			whiteBalance: { dropdown: e.ENUM_WHITEBALANCE_SET }, 
			zoom: true,
		},
	},

	{
		// Specific for the AK-UB300 Camera
		id: 'UB300',
		capabilities: {
			colorGain: null,
			colorPedestal: null,
			colorTemp: { dropdown: e.ENUM_COLOR_TEMPERATURE_HE40 },
			colorTempAdv: false,
			colorbar: true,
			error: true,
			filter: { dropdown: e.ENUM_FILTER_3 },
			focus: false,
			focusAuto: false,
			focusPushAuto: false,
			gain: { cmd: 'OGS:', dropdown: e.ENUM_GAIN_UB300 },
			install: false,
			iris: false,
			irisAuto: false,
			ois: false,
			panTilt: false,
			pedestal: { cmd: 'OSG:4A:', dropdown: e.ENUM_PEDESTAL_UB300() },
			power: true,
			preset: false,
			presetSpeed: false,
			presetTime: false,
			recordSD: false,
			shutter: { cmd: 'OSG:5D:', dropdown: e.ENUM_SHUTTER_UB300 },
			shutterAdv: false,
			streamRTMP: false,
			streamSRT: false,
			subscription: true,
			tally2: true,
			tally3: false,
			tally: true,
			trackingAuto: false,
			version: false,
			whiteBalance: false, 
			zoom: false,
		},
	},

	{
		// Specific for the AG-CX350/4000 Camera
		id: 'CX350',
		capabilities: {
			colorGain: null,
			colorPedestal: null,
			colorTemp: { dropdown: e.ENUM_COLOR_TEMPERATURE_HE40 },
			colorTempAdv: false,
			colorbar: true,
			error: false,
			filter: { dropdown: e.ENUM_FILTER_3 },
			focus: true,
			focusAuto: true,
			focusPushAuto: true,
			gain: { cmd: 'OGU:', dropdown: e.ENUM_GAIN_CX350 },
			install: false,
			iris: true,
			irisAuto: true,
			ois: { dropdown: e.ENUM_OIS_OTHER },
			panTilt: false,
			pedestal: { cmd: 'OSJ:0F:', dropdown: e.ENUM_PEDESTAL_UE150() },
			power: false,
			preset: false,
			presetSpeed: false,
			presetTime: false,
			recordSD: true,
			shutter: { dropdown: e.ENUM_SHUTTER_OTHER },
			shutterAdv: false,
			streamRTMP: true,
			streamSRT: true,
			subscription: false,
			tally2: true,
			tally3: false,
			tally: true,
			trackingAuto: false,
			version: false,
			whiteBalance: { dropdown: e.ENUM_WHITEBALANCE_SET }, 
			zoom: true,
		},
	},
]
