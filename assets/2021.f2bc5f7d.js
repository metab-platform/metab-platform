const a=[.06,.11,-.08,.09,-.1,-.05,-.22,-.21,-.11,-.16,-.02,-.04,-.09,.09,-.03,.11,.04,.09,.02,-.13,.02,.08,-.1,.07,-.11,-.15,.16,-.09,-.05,.19,-.18,.1,-.08,.05,.11,.03,-.02,.02,-.13,0,0,-.13,-.11,-.14,.02,.1,.09,-.03,.16,-.22,-.17,.11,.09,-.06,-.27,0,-.19,-.02,-.04,.04,-.19,-.12,-.14,.14,.02,.09,-.15,.01,-.09,-.14,.15,.05,-.3,-.1,-.06,.05,.18,-.23,-.04,0,.1,.1,-.15,-.07,-.2,.11,-.18,-.14,.03,-.11,-.28,-.04,-.27,.09,-.1,-.19,.16,.27,-.11,-.24,-.01,-.17,-.27,.02,-.28,.05,.3,.18,-.13,-.13,.19,-.28,-.17,.17,-.21,.03,-.05,.16,-.06,-.14,.22,.01,-.16,.05,-.09,-.28,-.1,-.07,.19,0,-.28,-.26,-.16,-.22,.13,.1,-.04,.04,.1,.07,-.16,.06,-.17,-.18,.06,-.05,-.05,-.11,-.27,-.08,-.16,-.23,.02,.22,-.3,-.31,-.07,.02,.11,0,-.27,-.22,.07,-.16,-.32,-.23,.1,.09,-.11,-.04,.07,.06,-.28,-.21,-.18,.12,0,.22,-.15,.01,-.07,.09,-.09,.05,-.24,-.17,.13,.08,-.2,-.08,-.08,-.29,-.01,-.23,-.21,-.11,-.17,-.24,.07,.05,-.06,-.23,-.04,.08,-.04,-.23,-.09,-.26,-.23,-.1,-.29,.07,-.07,-.01,.01,.09,-.11,-.28,.17,.18,-.16,-.25,-.01,-.07,-.29,-.02,-.29,.09,-.36,-.15,.17,.11,-.07,-.05,-.15,.05,.09,.1,-.17,.07,-.16,.05,-.23,-.18,-.25,-.22,-.15,.09,-.08,-.21,-.24,-.04,-.28,-.19,-.19,-.1,-.03,-.13,-.11,.02,.07,-.27,-.26,-.15,-.06,-.27,-.04,-.22,0,-.03,0,.07,-.04,-.12,-.09,0,.1,-.19,-.14,.15,-.26,.21,-.05,.18,-.26,-.13,.18,-.04,-.2,.01,-.22,-.21,-.16,-.25,-.25,-.14,-.01,-.06,.02,-.2,-.08,-.07,.01,.19,.07,-.11,-.09,-.14,-.23,.04,-.08,-.03,-.09,.08,-.23,-.2,-.19,-.33,-.09,-.03,-.09,-.17,.03,-.12,-.24,-.26,-.15,-.1,-.16,-.26,.22,-.08,-.05,.23,.12,.86,.11,-.03,-.13,.05,-.26,-.14,-.17,.22,.01,-.09,-.12,-.27,-.15,-.22,-.21,-.13,.04,-.3,.12,-.05,-.11,-.05,-.13,.01,-.02,.04,-.26,.12,-.15,.17,.05,-.09,-.19,.23,.04,.04,-.1,-.05,-.13,-.31,-.22,-.19,.09,-.25,-.04,-.04,.08,.03,-.03,0,-.04,-.05,-.13,-.11,-.16,-.11,.11,-.07,-.04,-.1,.12,.13,-.11,-.15,-.16,-.35,-.16,-.07,-.14,-.14,-.09,-.16,-.17,-.18,-.1,.13,-.05,-.18,-.35,.18,-.23,-.12,-.27,.06,-.02,-.1,.15,.06,-.01,-.05,-.07,.13,-.18,-.19,-.28,-.11,-.14,-.07,-.29,0,-.24,-.17,-.1,-.19,-.26,-.11,-.13,.02,-.07,-.37,-.02,-.2,-.05,.17,-.23,.04,.15,-.23,.25,-.14,.21,-.02,-.13,.04,-.07,-.17,.15,-.19,-.09,-.21,.1,-.26,.01,-.03,.19,-.02,-.01,.09,-.31,-.16,-.16,-.2,-.08,.15,-.12,0,-.11,-.31,-.07,-.01,-.3,.03,.06,-.11,-.08,0,-.19,-.1,-.11,-.05,-.19,.28,-.11,-.23,-.27,-.09,-.18,.02,-.08,-.15,-.12,-.19,-.09,-.21,-.22,-.19,-.16,-.02,-.05,.18,-.2,-.28,-.23,-.15,-.05,-.14,-.2,-.13,.05,.06,.01,.04,-.16,-.22,-.32,-.23,-.05,-.11,.04,.06,-.31,-.26,-.19,-.01,-.22,-.39,-.13,.14,.03,-.04,.09,.13,-.11,-.03,.25,-.04,-.1,.04,-.05,-.09,.19,-.16,.04,.03,-.02,.06,-.21,-.18,0,.42,-.18,.24,-.24,.02,-.15,-.05,-.1,-.05,-.14,-.06,.12,-.07,-.21,.63,.05,-.09,-.2,.08,-.27,.03,-.11,-.01,.1,0,.05,-.01,-.02,-.12,-.26,.18,-.19,-.05,-.14,-.19,-.17,-.07,-.14,-.24,-.11,.12,-.31,-.01,-.01,.03,.24,.04,-.17,-.32,.31,-.09,-.1,-.28,-.09,-.04,-.26,.12,-.27,.1,-.26,-.01,-.1,-.28,-.24,-.17,-.16,.13,.08,-.21,-.24,-.15,-.16,-.18,-.07,.05,.06,-.06,.15,-.05,-.3,-.22,-.15,-.12,.1,-.31,.1,.18,-.28,-.06,-.16,-.26,0,.07,.03,.01,-.09,-.19,-.06,-.26,-.05,-.09,.2,-.19,-.14,-.05,-.07,-.04,.69,.22,-.28,-.23,-.15,-.07,-.06,.09,.39,-.16,.11,-.04,-.14,.08,.1,-.11,-.19,-.2,-.03,-.02,-.19,-.04,.03,-.16,.05,.05,-.14,-.04,-.1,-.3,-.29,-.08,-.21,-.03,.04,-.04,.11,.14,-.18,-.1,-.1,-.3,-.25,-.19,-.14,-.16,.02,.12,-.29,-.19,-.04,-.01,.06,.08,.04,.23,.15,-.16,.11,-.28,-.1,.03,-.19,-.18,-.01,-.03,-.11,.38,.05,-.17,.17,.15,-.14,.15,.01,.03,-.18,-.18,.17,.01,-.14,-.01,-.01,-.25,-.01,.04,-.14,-.03,.03,.12,-.17,-.34,-.01,-.05,-.16,.28,.13,.06,-.18,-.16,-.13,.07,-.3,.06,-.26,-.22,-.07,-.29,-.01,-.06,.06,-.15,-.09,-.26,-.22,-.19,-.18,.07,.1,-.26,-.21,.12,-.11,.11,-.09,-.16,.08,-.21,-.19,0,.31,-.16,.02,-.3,-.25,.24,-.23,.4,.42,.13,-.13,.02,-.2,-.18,.14,.2,.24,-.08,.13,-.07,-.22,-.12,-.02,0,-.05,-.21,.15,-.14,-.07,-.03,-.06,-.19,.15,-.02,.07,-.08,.03,.13,-.18,0,-.01,-.19,.45,-.14,.18,.12,-.21,.13,-.13,.17,-.07,-.09,-.01,.21,-.29,-.35,-.31,-.04,-.25,-.03,.05,-.08,-.2,-.29,.2,.03,-.18,-.26,-.14,.07,-.08,-.29,-.16,-.26,-.04,-.13,-.11,.08,.15,-.13,.08,-.11,-.03,-.03,-.21,-.26,-.2,-.25,-.1,.08,.2,-.27,-.14,.09,.1,.31,-.09,-.16,-.17,.05,.44,-.01,.09,-.09,.08,-.32,.04,-.22,.04,.18,.21,-.2,-.16,-.17,-.11,-.25,-.23,-.09,-.19,-.07,-.02,-.15,-.21,-.11,-.09,0,-.16,-.31,-.32,-.07,-.02,-.15,-.11,.14,-.21,-.04,-.12,-.15,.15,-.11,-.13,-.11,-.01,-.1,-.23,-.09,-.01,.13,-.21,-.11,-.2,.01,-.25,-.07,-.11,-.12,-.19,-.13,-.14,-.09,-.26,-.06,-.22,.14,-.01,-.17,.05,.07,.25,-.12,.04,.09,-.1,.08,-.23,-.28,-.23,-.22,-.12,-.23,.14,-.26,-.28,-.25,-.16,.03,.01,-.26,-.19,-.27,-.36,-.29,.19,-.14,.16,.02,.09,-.28,.16,.19,.15,-.04,0,.04,.06,.13,.25,-.1,.09,-.19,-.17,.25,-.2,.01,-.29,-.11,-.2,.07,-.15,-.17,.03,-.31,.04,-.28,-.05,0,.12,.16,0,-.1,-.16,-.27,-.05,-.23,-.09,-.22,-.17,.23,-.21,0,.21,.19,.18,-.32,-.08,.03,-.09,-.14,-.14,-.14,-.12,-.19,-.05,-.02,.13,-.11,-.18,-.14,.23,.01,-.03,-.01,-.19,-.07,.1,-.15,-.06,-.02,-.22,-.12,-.17,.01,.05,-.2,-.03,-.31,-.14,-.06,.07,.03,-.06,.51,-.21,.14,.1,-.06,.07,-.15,.08,-.07,-.05,-.05,0,-.19,-.21,-.2,-.18,-.17,-.24,.26,-.12,-.07,.01,-.12,-.12,-.09,-.13,.09,.03,-.24,-.26,.45,.17,.46,-.07,-.02,-.15,-.1,0,.07,.17,.14,.09,.02,.04,.06,-.27,.14,-.2,-.11,-.03,.04,.03,-.13,-.15,-.27,-.03,-.18,-.13,.13,.01,-.11,-.2,.08,-.11,.05,-.1,.03,.09,-.03,-.08,-.16,.01,-.23,.09,-.11,.04,.03,-.15,-.13,.14,-.23,-.17,.07,-.09,-.03,-.11,-.15,-.21,-.01,-.05,-.23,-.2,.11,.01,.19,.19,-.1,-.26,-.1,.07,-.17,.14,.05,-.03,-.01,-.08,.01,-.02,-.26,-.14,-.02,-.11,.06,-.25,-.14,-.19,.25,.06,-.23,.04,-.15,-.32,-.25,-.09,-.06,-.05,-.28,-.1,.23,.17,-.09,-.08,-.16,.01,-.1,-.1,-.06,-.13,-.13,-.14,.09,.04,-.26,-.33,.21,-.18,-.21,.14,-.21,-.11,-.14,-.11,-.22,-.05,-.03,.03,.07,-.02,-.1,-.04,.02,.07,-.06,.09,-.05,-.17,-.01,-.16,-.04,.1,-.27,.08,-.05,-.31,-.02,-.25,-.18,.19,-.08,-.08,-.23,.11,-.27,.16,.13,-.33,.07,-.05,-.06,-.18,.17,-.11,-.25,-.05,.12,-.16,.02,-.24,-.03,-.07,-.27,-.18,.12,-.12,.06,.27,.06,-.09,-.1,-.13,-.19,-.29,-.22,-.06,-.19,-.13,-.25,-.13,-.24,-.02,.17,.15,-.01,-.15,-.27,-.06,-.1,-.13,-.05,-.02,-.18,-.12,-.08,-.17,-.23,-.02,.06,-.17,-.24,-.04,-.08,-.16,-.24,.03,-.05,-.11,.2,-.12,-.11,-.21,-.15,.02,.15,-.25,.04,-.09,-.13,-.31,-.02,.12,.04,-.2,-.09,.18,-.27,.2,.07,-.15,-.31,-.26,-.2,-.19,-.23,-.09,-.15,-.22,-.27,-.16,-.16,-.06,-.28,-.14,-.29,.1,-.29,.21,.08,.1,-.3,-.19,-.13,-.33,-.26,-.26,-.15,-.06,-.23,0,-.27,-.35,.56,-.08,-.24,-.18,-.05,-.26,-.21,-.15,-.25,-.26,-.24,-.02,.09,-.18,.07,-.1,.07,-.12,.23,.44,.06,-.25,0,.09,-.26,.04,.07,-.13,.04,-.13,-.33,.12,-.01,-.02,0,-.2,.03,-.18,-.11,.22,.07,.06,-.04,-.04,.18,.03,-.07,0,-.2,-.16,-.31,-.05,-.18,.01,.07,-.24,-.05,-.29,.08,-.18,-.17,.09,-.24,-.14,-.16,-.08,-.14,.23,-.09,.03,-.13,-.08,-.17,-.08,-.16,.06,0,.05,-.09,-.18,.21,-.33,-.2,0,.28,-.1,-.24,-.26,-.02,-.22,.08,-.17,.05,-.25,-.23,-.37,.45,-.31,-.15,.4,.24,-.29,-.25,-.3,-.18,.33,-.21,-.26,-.24,-.3,-.03,-.22,-.24,.05,-.09,-.03,-.21,-.17,-.06,-.11,-.19,-.01,-.21,-.03,-.23,-.26,-.1,-.16,-.02,-.02,-.24,.08,-.01,-.06,-.01,.05,-.05,-.24,-.32,-.19,-.13,.19,.07,-.13,.09,.04,.2,-.18,-.28,-.25,-.2,-.15,-.05,-.3,-.09,-.26,-.12,-.11,-.18,-.12,-.2,-.09,-.08,-.13,-.12,-.1,.08,-.17,-.08,-.19,-.1,.08,-.33,-.17,.22,-.21,-.06,.04,.08,.02,-.01,-.17,-.22,-.09,-.02,.03,-.04,-.02,-.16,-.17,-.14,.07,-.14,-.28,.19,-.27,-.01,-.06,0,-.2,-.03,-.21,-.31,-.24,.03,-.11,-.13,-.11,.01,.17,-.23,0,-.2,-.04,-.22,.35,-.08,.15,-.11,-.15,-.16,-.04,.08,.17,.02,-.03,-.29,-.25,-.12,.44,-.02,-.21,-.11,-.29,-.2,-.23,-.17,.14,-.11,.18,-.31,.09,-.21,0,.18,.26,-.09,-.03,.02,-.3,.04,-.25,.07,-.13,-.13,-.18,-.19,-.17,-.13,-.21,0,-.22,-.26,-.34,-.17,.07,-.16,-.14,-.14,-.11,.05,-.21,0,-.12,-.32,-.2,-.2,.11,-.02,-.1,-.13,-.14,-.17,-.07,-.21,-.25,-.15,-.01,-.23,.06,-.15,-.2,.25,-.18,.08,-.05,-.16,.08,-.05,.08,-.25,.06,-.13,-.09,.17,-.29,-.27,.13,-.08,-.2,.14,-.07,-.13,-.1,.04,-.25,-.15,.04,.02,-.14,-.11,-.11,-.11,.05,-.08,-.14,-.04,.15,.05,-.21,-.17,-.13,-.07,-.13,-.01,-.15,-.08,-.12,.23,-.14,.02,-.17,-.15,-.27,.15,.01,-.03,.21,-.26,-.06,-.11,-.05,-.26,-.2,-.15,-.14,-.14,.06,-.18,-.05,.04,-.16,-.16,-.04,-.02,-.15,-.06,0,-.14,-.11,-.12,.11,.05,.11,-.12,-.18,.06,-.24,.11,-.05,.09,.18,-.03,.09,0,-.19,-.02,.39,-.05,-.06,-.06,-.16,-.28,.19,.05,-.06,-.14,-.04,-.07,.1,.03,-.31,-.1,-.19,-.23,-.08,.12,-.18,-.06,-.36,-.13,-.23,-.01,0,-.15,-.03,-.15,-.22,.16,.19,-.17,-.09,-.16,-.35,-.08,-.23,-.06,-.17,-.04,-.07,.02,-.21,.03,-.25,.02,.15,-.19,-.32,0,-.19,-.15,-.03,-.22,-.11,-.34,-.06,-.24,-.13,.05,-.14,-.06,.06,.09,.02,-.11,-.12,-.25,-.31,-.16,.4,0,-.16,-.25,.19,0,-.1,-.03,.02,.15,-.31,-.28,-.34,-.13,-.08,-.24,-.11,-.11,.1,-.19,-.11,-.22,-.19,-.23,-.15,-.21,-.05,-.01,-.15,-.08,-.02,-.16,-.22,-.27,.07,-.02,.1,.1,.04,-.06,-.06,.09,-.18,-.17,-.13,-.14,.63,.11,-.07,-.3,-.22,.09,.03,.01,-.13,-.06,-.06,-.19,-.06,-.08,-.25,.03,-.14,-.05,.17,-.16,-.14,-.18,-.31,.23,.02,-.19,.04,-.05,.31,-.08,-.05,.21,-.12,-.24,.33,-.23,-.1,.09,.01,-.15,.18,-.1,-.25,.08,-.1,-.02,-.13,-.18,.02,-.26,-.31,.07,-.04,-.09,-.07,.09,.04,-.02,0,-.17,-.14,-.21,0,-.12,-.09,-.32,.15,-.06,.09,.14,-.08,-.14,-.17,-.16,-.09,-.21,-.07,.27,-.21,0,-.25,.26,.08,.29,.39,-.01,-.06,-.1,-.04,-.25,.13,-.37,-.06,-.06,-.15,-.07,.1,-.1,-.01,-.34,0,.08,-.26,.06,-.02,-.13,-.33,-.13,-.33,.2,-.2,.13,-.09,-.17,-.06,0,-.13,-.04,-.12,-.02,-.29,0,-.07,-.17,-.26,-.02,-.09,.03,.09,-.03,.14,-.28,1,-.09,-.07,-.14,-.04,-.12,-.2,-.24,.01,-.24,.25,-.03,.02,-.04,-.25,.1,-.23,.27,-.09,-.12,-.08,-.05,.19,-.28,-.14,-.01,-.02,.22,-.14,-.08,.15,-.04,.18,-.08,.01,-.16,-.03,-.09,-.01,.01,-.04,-.21];export{a as rvalData};
