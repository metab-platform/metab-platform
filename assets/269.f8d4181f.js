const a=[-.07,.1,.17,.15,.14,-.09,-.1,.25,.39,.16,.56,-.07,-.02,-.09,.47,-.08,.03,0,-.15,.12,-.14,-.07,-.2,.33,.42,.14,-.15,-.29,-.39,-.11,.13,-.12,.31,0,.14,-.19,.22,.4,-.09,.2,.19,.14,-.09,-.1,-.06,.52,0,.05,.09,0,.26,-.16,-.03,.01,.11,.46,.5,-.05,-.28,.26,-.03,.2,-.07,.04,.32,-.02,.1,.37,.19,-.07,-.14,.2,.13,.03,.11,-.06,-.11,0,.07,.06,-.07,.14,.03,.07,.04,-.01,.2,.11,-.02,.08,-.16,-.03,.1,-.21,.31,-.06,-.09,.09,-.08,0,.08,.03,.01,-.05,-.02,-.04,-.16,-.1,.25,-.01,.06,.14,-.17,-.12,.04,.09,-.15,-.07,-.01,.4,-.11,.05,.22,-.09,.02,0,.11,.08,-.11,.22,-.04,.05,-.06,.06,-.01,-.14,-.04,.08,-.18,-.05,.06,-.03,-.02,.2,-.07,.02,.05,-.27,.11,0,.04,.39,-.25,.06,.04,-.18,-.11,.01,-.02,.44,-.01,-.06,-.03,.12,.19,.13,.1,-.09,-.23,.29,.01,.06,-.06,.39,.11,-.03,.06,-.12,.05,.18,.07,.02,-.08,.14,.16,-.14,.15,-.08,-.12,.1,-.18,.14,.07,.18,.21,.09,-.03,-.07,.07,-.01,.22,.29,.22,.21,.07,.11,.01,-.09,0,-.15,.06,.33,.03,.29,-.06,-.19,-.03,.06,-.09,-.01,-.09,.01,-.13,.09,.13,.21,.03,-.16,.02,.11,.02,-.04,.2,.06,0,.01,.27,.28,-.17,-.01,.11,.3,.1,-.04,.13,.2,.01,.12,-.07,-.05,-.08,-.03,.1,.09,.1,.01,-.06,.48,.05,.07,.01,-.2,.31,.09,-.22,-.02,.02,.06,1,.18,-.06,.25,.23,.03,.2,.02,-.07,.07,.12,.11,.08,.04,.34,-.12,-.04,.2,-.01,.33,-.22,-.13,.41,.02,.2,.17,-.13,-.09,.62,-.13,0,-.12,.03,.14,-.02,.08,.04,.17,-.19,-.03,-.28,.55,.17,-.12,-.17,-.11,.04,-.14,-.31,-.21,-.02,-.03,0,0,.31,.05,-.13,-.09,.12,-.05,.02,-.1,.02,-.01,.13,.08,-.15,-.07,.08,-.06,.3,-.11,.08,-.05,-.03,-.24,.16,.1,.14,.01,-.09,.14,.03,-.09,.13,-.04,.06,.33,.15,-.09,.03,.14,.29,-.02,-.08,-.08,.12,-.04,-.18,.21,-.05,.04,-.06,.01,.27,-.2,.06,-.09,.02,.08,.06,-.16,0,-.08,.02,-.08,-.02,.06,-.03,.01,.15,.21,.06,-.07,.08,.3,.39,.09,-.1,-.13,.04,-.04,-.01,-.03,.11,.23,.04,.03,.18,.01,-.07,-.07,0,-.02,.14,.07,.03,-.02,.03,.03,.08,-.06,-.07,.19,-.1,-.16,.15,.15,.29,.07,.04,.01,.1,-.18,.4,-.04,-.1,.14,.24,.07,.05,.12,-.02,.19,.07,.2,-.02,-.13,.16,.16,.23,.06,.25,-.04,-.2,-.12,.04,-.11,-.08,.2,-.15,.35,-.06,.09,.03,.06,.01,.08,-.06,.28,-.09,.01,-.08,.23,.16,.08,-.11,.25,.12,.25,.1,-.01,-.01,.31,0,.21,.04,.02,-.07,-.26,.15,.06,.08,-.08,-.09,-.18,.09,.14,-.17,0,.35,-.05,-.14,-.05,.19,.11,.02,-.14,-.3,.23,.11,0,.13,-.04,.11,-.09,.05,.01,.11,-.03,.05,.03,-.08,.11,.05,-.1,-.25,0,-.02,-.09,-.07,.18,.03,-.19,.06,-.09,-.01,-.14,-.1,.09,-.29,-.02,-.09,-.15,-.05,-.12,.02,.15,-.07,-.12,.05,-.54,-.06,.19,.09,.02,.21,-.09,-.05,-.03,0,.09,-.04,-.07,.05,.09,.14,-.01,.03,-.04,.09,.08,.07,-.01,.34,0,.07,.13,-.09,-.03,.07,-.07,.04,.13,.02,-.11,-.01,.25,.15,-.09,-.11,.23,.09,-.05,.03,.09,.15,-.22,.23,.13,-.09,.18,.34,.16,.11,.04,.04,-.22,.01,-.05,-.02,-.56,.02,.28,-.2,.13,-.22,.06,.12,.19,.06,-.01,-.24,.07,-.31,.02,-.11,.08,.22,-.14,0,.17,.14,.35,.08,-.01,.03,.01,.23,.05,-.04,-.09,-.07,.24,-.11,-.29,.02,.12,-.22,0,-.07,-.03,.22,-.15,-.02,.06,.24,.13,.27,.05,-.08,.02,.12,-.08,.15,-.13,-.08,-.03,-.1,-.04,.19,.18,.13,.08,-.01,-.16,0,-.1,.1,.12,.19,-.11,.06,-.34,.16,.09,-.16,-.04,-.16,.12,.18,.17,-.09,-.14,-.42,-.02,-.11,-.03,.11,.27,-.02,-.1,.05,.24,.14,.1,-.07,-.03,-.13,-.09,.05,-.19,.18,.1,.01,.2,-.05,-.01,.12,-.12,-.03,-.04,.19,-.03,.21,.07,.15,-.01,.15,-.03,.04,-.12,-.02,.09,.21,0,.03,-.05,.24,.06,-.24,-.24,.35,.09,-.18,-.14,.05,.03,.24,.26,.03,.02,.04,-.05,-.03,.04,.17,.25,-.16,-.2,.07,0,-.27,-.22,.21,-.06,-.22,.04,-.06,-.18,.24,-.11,-.28,-.18,.09,-.03,-.1,-.08,-.16,.31,.09,-.14,.16,.13,-.01,-.06,.06,-.05,.13,.1,.25,-.04,-.02,-.09,.02,.34,.12,-.15,.05,.07,-.26,-.07,.14,-.07,-.07,-.04,.22,.06,.29,.01,-.04,-.02,-.1,-.17,.21,.11,.06,.05,-.11,.04,.1,.13,.07,.2,.09,.07,.07,.16,.18,.14,0,.09,-.09,.24,-.16,.02,-.12,-.02,-.13,.02,.05,-.03,.01,.19,-.02,.04,.07,-.02,-.06,-.05,.08,.11,-.01,-.11,.17,-.01,-.05,-.18,-.13,-.12,.17,.06,.17,.13,-.17,-.17,-.37,-.06,-.09,-.01,.13,.12,-.05,.15,-.16,-.1,-.27,-.03,-.59,-.01,.02,-.07,-.11,.22,.28,.05,.24,.13,-.18,.07,.09,.1,.08,-.25,-.11,-.11,-.06,-.08,-.2,-.15,.07,.22,.2,.1,-.03,.12,-.07,.31,.05,-.05,-.02,-.04,-.04,-.17,-.04,.12,.03,.02,-.11,.06,.02,.13,-.26,-.08,.02,.15,.1,.1,-.07,.13,.07,-.19,.12,.14,.19,.14,.08,-.14,.04,.06,-.01,.05,.07,-.18,-.08,.08,.02,-.33,.26,.19,.07,.11,.18,.04,-.02,-.22,-.1,.07,.05,-.18,.11,.13,.24,-.13,.14,.15,.02,-.04,.03,.2,-.1,-.05,-.18,-.13,.39,-.05,-.03,.17,-.2,-.27,.15,.24,-.04,.04,-.09,.09,.17,.15,.01,.06,.01,-.17,-.02,.08,-.05,.08,.07,-.06,.11,.08,.12,.02,.05,.01,-.06,.04,.28,.14,.02,.17,-.05,.02,.34,.15,-.2,.02,-.21,-.13,.24,-.13,-.34,-.13,.07,-.3,.48,.09,-.14,-.12,.16,.1,-.06,.07,-.13,-.04,-.04,-.03,.07,.15,.29,.26,.03,-.09,.07,.1,-.07,.08,.07,-.1,.15,-.19,.04,-.1,-.16,.14,-.01,.12,.22,-.04,-.09,-.09,-.31,.26,.04,.04,.37,.27,-.02,.07,-.08,.18,.18,0,.21,.06,-.1,.09,.08,.19,.17,.04,-.02,.12,-.06,-.09,-.03,-.19,.02,-.17,.04,-.05,-.06,.18,-.32,-.07,0,0,0,-.13,.07,-.02,.08,.03,.22,-.18,-.1,.24,.14,.3,.2,-.08,.04,-.18,-.01,-.01,.09,-.14,.01,-.01,.14,.3,-.01,.19,0,.29,.07,-.09,-.04,.01,-.21,.2,-.19,-.07,-.07,.11,.05,-.08,0,.15,.18,-.21,-.13,.04,.12,.09,.23,.27,.06,-.11,.23,-.01,.27,.2,-.13,.16,0,.03,.13,-.11,-.1,.12,-.01,-.03,.44,.34,-.2,.08,.25,.1,-.07,.11,-.03,.13,-.03,.13,-.29,-.09,0,.02,.23,-.05,.24,.04,0,-.01,-.11,-.14,.04,-.06,.09,.25,-.12,-.01,-.62,.31,.02,-.1,.05,0,.05,.02,-.04,-.33,.03,.13,.11,0,-.11,0,-.27,.03,-.02,.05,.06,-.03,-.1,.07,.4,-.24,.11,.05,-.09,-.1,-.1,.14,.31,-.1,-.07,-.14,.01,-.03,-.25,-.16,-.04,-.12,.04,-.01,.15,.16,.11,.13,-.08,-.08,.26,0,.11,-.18,-.08,.08,.13,-.19,.17,-.02,.06,.1,-.19,-.14,.22,.19,-.2,-.24,.16,.05,-.07,.12,.26,.06,-.18,-.19,-.12,-.15,0,.02,0,-.16,.04,.2,.02,.11,-.23,-.01,.09,-.15,-.02,-.08,.24,-.03,.23,-.02,.16,-.02,.05,.1,-.18,.19,.03,.01,.06,-.04,-.15,.04,.12,-.01,.24,.24,.34,.08,-.12,.28,.09,-.13,.21,.1,-.18,.22,-.08,.08,-.04,-.32,.14,.46,.22,-.04,-.15,-.06,-.1,.07,.01,-.12,.02,.01,-.07,-.02,-.11,.06,-.13,.09,-.6,.26,-.01,.19,-.25,.11,.19,-.05,.02,.21,.2,.01,-.04,.03,-.03,-.03,.09,-.07,-.08,.12,-.08,-.02,-.05,0,-.14,-.06,.04,-.03,-.06,.08,-.1,.08,.01,.02,-.17,-.35,-.03,.16,.16,.1,-.07,.23,.07,-.03,.09,.11,-.09,.16,.04,-.11,.06,.17,.01,0,.01,-.06,-.12,.02,-.1,-.06,.24,.1,0,.14,.15,.04,-.1,-.13,.04,.05,.03,.35,.02,.11,-.1,.09,.13,.1,-.01,-.06,.05,.3,-.11,-.12,.06,-.08,.25,.06,.05,.1,.5,0,.07,0,-.09,.29,-.01,-.02,.02,-.13,.21,.22,.22,0,.2,-.12,-.06,.14,.18,.11,-.13,-.1,.1,0,-.12,.07,0,.26,0,.39,.1,.15,.19,-.13,-.09,.17,.01,-.09,.09,-.19,.04,-.07,-.01,.05,.09,.08,-.05,.04,.08,0,.07,.28,.03,.01,-.01,-.26,-.01,.05,-.17,-.04,-.08,.01,-.04,.07,-.13,-.01,-.02,.26,.04,-.21,-.28,-.01,-.08,.02,-.08,.25,.25,.12,.16,-.05,-.17,.03,.16,-.06,-.06,.36,.22,-.06,.14,-.03,-.09,-.03,.17,.02,-.08,.37,-.11,-.13,.1,.17,-.04,-.16,.17,-.09,-.01,-.03,-.39,.24,-.14,.15,-.04,-.01,-.11,.18,.01,.11,.15,-.05,-.01,-.05,.16,.24,-.09,0,.13,-.16,.06,.12,.05,-.04,-.04,-.2,.09,-.05,.09,.13,.1,-.13,-.1,.13,-.15,-.02,.15,0,.34,-.01,.08,.01,.36,.11,-.09,.15,-.13,-.08,-.04,.36,.18,-.01,.05,.24,-.08,.13,.09,.06,.06,.27,.03,.13,.03,-.07,.22,.03,.09,0,.06,.47,.07,-.07,-.1,-.01,-.02,.09,.03,-.21,.18,.19,.08,.15,-.24,.14,.15,-.1,-.03,-.03,-.1,.06,.16,.09,.08,.01,.07,-.18,-.01,.12,.04,.07,.09,.04,.05,.16,-.16,-.04,-.03,0,.27,.04,.24,.1,-.42,.25,.17,.11,-.04,.04,.02,-.01,-.04,.09,-.29,-.05,-.39,-.09,-.1,.1,-.1,-.1,.02,.1,.07,.14,.18,.16,.04,.01,-.07,.13,-.47,-.02,.2,.09,.06,-.01,.08,.08,.09,.04,.06,.09,-.12,.31,.3,.02,-.14,.32,.02,.1,-.02,-.11,.25,.08,.13,.18,.19,.34,-.05,.12,.43,.4,.15,.07,.14,-.02,.02,-.19,.04,.04,-.09,.12,.06,-.01,-.08,.13,0,.15,.09,.3,-.05,-.08,.16,-.09,-.02,.16,.27,-.04,.13,-.15,-.07,-.05,-.08,-.05,.18,.12,.08,.2,.01,.09,.01,.05,-.16,-.1,.02,-.01,.06,.16,.2,.16,-.08,-.02,.34,.08,-.14,-.04,.08,.24,-.09,-.1,.13,-.08,-.15,-.2,-.13,.22,-.09,.03,.08,.12,-.3,.12,.15,.14,.01,.16,-.16,.05,.06,0,.12,.06,-.13,.43,.08,-.09,.1,.1,.14,-.04,.2,.23,.13,.14,.07,.06,.06,-.02,0,.14,-.17,-.12,-.08,.01,.29,.18,.02,-.14,.24,.15,.05,.16,.21,.12,-.06,.13,.06,-.05,-.03,.19,-.07,.02,-.09,.13,.28,.13,.08,-.18,0,-.08,.11,-.2,.04,-.07,-.17,-.09,-.01,.48,.19,.23,.09,.08,-.18,.15,.16,.25,-.02,-.22,.03,.1,.23,.08,-.07,.09,-.16,-.41,.06,.16,.25,.21,-.1,.24,-.12,.14,.16,-.02,.16,.1,.2,-.22,.08,-.07,.22,.05,-.02,-.03,.06,.32,-.05,.02,-.01,-.3,.13,.1,-.03,0,.07,-.02,-.22,-.12,.18,-.02,.1,.01,.09,.08,.03,.09,-.13,.13,-.01,.12,-.03,-.26,-.05,.12,-.11,.09,-.03,.11,.1,.03,-.01,.21,.47,-.01,-.03,.16,.06,.23,.13,-.16,-.17,.1,-.3,.05,-.21,.03,-.1,.29,-.21,-.15,-.05,-.32,.07,.24,-.05,-.02,-.15,-.28,.21,.05,.03,0,.04,.14,.09,.02,.12,-.05,.12,.07,.05,-.23,.12,.17,.04,-.14,.16,.19,.26,.28,-.11,.19,.08,-.1,.09,.13,.01,-.1,-.09,-.13,-.25,-.09,.1,.1,.04,-.01,-.08,.1,.14,.11,.17,-.15,-.21,.09,.23,.05,.6,-.26,-.12,.08,.16,.03,-.06,.15,-.14,-.14,.23,-.2,.13,.07,.07,-.01,-.04,.01,-.03,.17,.08,.22,.05,.22,.1,.24,.1,.17,-.01,.24,.01,-.17,0,.31,.11,.11,.04,.11,.06,.01,.13,.01,-.18,.14,-.08,.11,.04,.19,.01,-.06,.15,.02,-.06,.01,-.06,0,.09,.06,.06,0,-.01,-.24,-.1,-.26,.01,-.02,.18,.15,.23,.18,.12,.02,-.16,.03];export{a as rvalData};
