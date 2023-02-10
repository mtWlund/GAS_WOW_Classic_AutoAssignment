/**
 * All credits to Trikas.
 * Go here and thank the man!
 * Discord: https://discord.gg/4625d8ccgz
 * Donate beer money:
 * PayPal:  https://www.paypal.com/donate/?hosted_button_id=AR22CNHWXLQ4L 
 * Patreon: https://www.patreon.com/trikas
 * 
 * Configuration values. Damn i learn so much from this awesome person!
 * Thank you Trikas if you ever read this; All credits to you mate!
 */
let _G = {
  sheetName: {
    assignments:            'Assignments',
    raiders:                'Raiders',
    raidData:               'RaidData',
    memberprofiles:         'MemberProfiles',
    lib:                    'Lib',
    maps:                   'Maps',
  },
  namedRange: {
    raidId:                   'raidId',
    composition:              'Composition',
    raidRoleClass:            'CompRaidClassRoles',
    raidRoles:                'CompRaidRoles',
    classColoringStyle:       'ClassColoring',
    useManualSource:          '_useManualSource',
    classes:                  '_Classes',
    rhOverlayOptions:         '_RaidHelperOverlayOptions',
    rhComposition:            '_RaidHelperComposition',
    raidParticipants:         '_Participants',
    raidParticipantsAllData:  '_ParticipantsAllData',
  },
  config: {
    discordNameSplitBy:     undefined,
  }
}

const Config = {
  getSheet() {
    const ActiveSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
    return ActiveSpreadSheet.getSheetByName(_G.sheetName.raiders);
  },

  setupTrigger() {
    //createTriggerHideEncounterRows();
  },

  runSetup() {
    this.setupTrigger();
    this.getSheet().activate();
  },
}

_G = {
  ..._G,
  config: {
      discordNameSplitBy: "/| -{[()]}_ ,",
  }
}

function RunSetup() {
  Config.runSetup();
}