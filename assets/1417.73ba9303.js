const a=[.06,-.07,.03,-.03,.02,.07,-.03,.08,-.01,.13,-.08,-.01,.02,-.1,-.11,.01,-.07,-.05,.02,.08,.01,-.24,.28,-.17,-.07,.01,-.27,.08,0,-.28,.28,-.24,0,0,-.06,.06,-.07,-.11,.14,0,-.09,.04,.02,.1,.1,-.17,-.01,-.12,-.3,.3,-.03,-.24,-.12,.04,.25,-.11,.02,-.04,.02,.03,.26,.09,.12,.11,-.16,-.34,.07,-.17,-.07,-.13,-.02,-.07,.34,-.19,0,.01,-.12,.24,.05,-.27,-.15,.04,-.01,.02,-.07,-.14,0,-.01,-.12,.04,.25,.26,.15,.02,.03,.08,-.07,-.11,.04,.22,-.24,.12,.17,-.15,.24,.06,.04,.01,-.01,.22,-.02,.26,.13,-.07,-.08,-.04,.03,-.32,.01,.01,.12,-.06,-.1,.04,-.02,.3,.06,-.01,-.28,-.04,.23,.03,-.02,.35,-.06,-.06,.26,.02,-.3,-.13,.12,-.1,.11,-.01,-.07,.04,.01,.04,.15,0,.14,.14,.09,.01,.13,.21,-.15,-.01,-.07,-.12,.18,.18,-.05,.27,.13,.25,.13,-.33,.26,.03,-.05,-.24,.24,.09,.13,-.29,-.04,-.26,.28,.09,-.14,-.08,.21,-.03,.18,.08,-.11,-.05,.14,.01,.18,.2,-.04,.18,.21,.03,.26,.07,-.16,-.16,-.09,.13,-.02,-.05,0,.26,.01,.32,.31,.11,.16,-.1,0,-.08,-.06,.22,-.01,.11,-.31,-.29,.16,.19,.16,.01,.11,-.03,.18,-.3,.05,.08,.11,0,-.09,.12,-.05,-.05,.01,-.17,.14,-.08,.27,-.14,.18,.26,.09,.07,.03,.07,-.22,-.12,.14,-.05,.27,.08,.1,.01,0,.11,-.13,-.07,-.14,.2,.17,.13,.22,.22,-.16,0,-.11,-.09,-.09,.03,0,.08,.07,-.02,-.28,.29,.12,-.27,.28,-.26,-.11,.04,.16,0,-.29,-.08,.27,-.18,.09,.32,.08,.08,.14,.03,-.16,-.15,.13,.25,.13,-.01,-.13,.14,.04,.06,.03,.27,.23,-.08,.06,-.01,.03,-.07,-.04,.25,.24,.23,.09,.19,.08,.02,-.12,.07,.15,.22,.02,-.02,.13,.19,-.04,.19,.07,-.07,-.32,.07,-.33,.22,-.09,-.07,.25,.05,-.05,-.09,-.08,.12,.01,.29,.02,.2,.19,.18,-.11,.23,-.06,-.08,.18,-.11,.2,-.02,-.1,.04,.19,-.03,-.03,0,-.17,-.04,.21,.14,-.26,.04,.02,.17,.19,.13,-.12,.07,-.22,.27,-.23,-.07,-.04,-.11,.05,.06,-.17,-.03,.12,.1,.15,.02,-.06,.08,.06,.01,-.21,.12,-.01,.02,-.07,.01,.11,.04,.24,.13,-.13,.19,.17,.12,.07,-.05,.1,.19,.12,-.1,.12,-.12,.29,.07,-.17,-.03,-.22,.14,-.05,-.03,-.04,.01,.32,.09,.18,.14,-.02,.09,.25,-.02,-.09,.05,.02,.15,.16,.06,.07,-.18,.21,.21,-.05,.07,-.12,-.32,.14,.24,-.09,.01,-.13,.2,-.19,-.04,-.05,.19,.07,.14,-.02,.21,.06,.12,-.08,-.09,-.04,.03,.03,-.06,-.06,-.11,.3,.05,.08,.1,.05,-.25,.15,-.09,.07,.11,.22,.19,.21,.1,-.05,.06,-.02,-.03,0,-.09,0,-.03,.21,-.05,.11,.25,.14,-.04,.12,.03,.1,.05,.01,.05,-.03,.26,.12,.1,.05,.27,.23,-.18,.08,.19,.25,.03,-.16,.05,.07,.24,.23,-.13,.04,-.18,-.1,.06,.24,.24,-.05,.18,.02,.04,.33,-.03,.07,.06,-.04,.26,.06,-.28,-.17,-.11,.01,-.22,.09,-.01,-.28,-.02,.03,.04,.14,.05,.06,.08,-.08,-.16,.09,-.17,.06,.14,-.03,.2,.07,-.02,.17,-.23,.08,.11,-.06,.02,.01,.01,-.02,-.1,.24,.02,-.19,-.11,.16,.25,.32,-.12,-.01,.17,-.2,-.09,.16,.15,.08,.15,.14,-.06,.09,.07,-.05,.03,.07,0,.04,.13,-.06,-.25,.23,-.04,-.16,-.03,-.04,-.11,.15,.19,.25,.05,.01,.1,.06,-.04,.23,-.04,.17,.17,.17,-.12,-.03,.07,.12,.16,-.04,-.21,-.25,.35,-.09,.18,.03,.24,0,-.12,.13,.09,-.22,.05,-.14,.09,.14,.1,.08,.3,-.18,-.13,.17,.05,.04,.15,-.14,-.11,.05,.13,-.02,.05,.01,.19,.06,-.08,.02,.24,.05,-.02,.06,-.15,.12,-.28,.19,.23,.17,.04,.01,-.05,.08,.07,.03,.01,-.02,-.01,.03,.05,.06,.08,-.05,.04,.17,.18,-.13,-.02,-.08,.04,.12,-.03,.03,.07,.08,-.02,.16,-.15,.06,-.11,-.1,-.29,.1,.23,.07,.16,.02,-.04,-.09,.04,.01,.01,.06,.11,-.07,.1,0,-.01,.04,-.08,0,.08,-.17,.13,.11,-.1,.22,.29,-.08,.07,.02,.14,-.07,.09,-.14,-.26,-.12,-.08,.08,-.05,.18,.16,-.03,-.07,-.09,-.06,0,.12,0,-.24,.11,-.3,.08,-.29,-.03,.01,-.23,-.09,.08,.22,-.28,0,.2,.28,-.02,-.05,.27,.04,.23,.07,-.01,.24,.04,-.09,-.01,.07,.05,.18,.25,.25,.01,-.07,-.24,.19,.19,-.18,.01,-.26,.03,.07,.04,.23,-.04,.04,-.18,.13,-.14,.07,.06,.03,.18,.08,.02,.13,.11,-.13,.08,.21,-.01,-.28,-.04,-.02,-.17,-.14,.15,.05,.05,-.01,-.05,.22,-.09,-.13,.06,-.02,.14,.03,0,-.15,-.13,.32,.03,-.26,.21,.06,.13,.25,-.12,.11,.02,-.26,.22,.11,.02,-.3,.04,-.32,-.12,.24,.18,.22,.17,-.15,.13,.02,-.01,-.04,.11,.14,-.03,0,.09,.13,.19,.1,-.01,.3,.17,.26,-.07,.21,-.05,.02,-.29,.05,-.31,.11,-.08,-.04,.23,-.01,.09,.07,.13,.15,-.13,.23,.05,.1,-.16,.1,.13,-.03,.15,-.11,.09,-.16,-.12,-.04,-.16,.29,.08,.27,-.06,-.28,-.19,.1,.17,.09,.08,.19,.18,-.23,.15,-.17,-.05,-.02,.1,.03,-.03,-.01,.05,.15,.2,.05,-.03,-.01,.03,-.07,.26,-.04,.13,.05,-.11,.13,.15,.08,.07,.1,.1,.05,-.09,.02,.14,-.2,.09,.04,.05,-.06,.07,.04,.03,.17,0,.05,0,-.02,.25,.04,.09,.14,-.06,.04,-.22,.08,-.2,-.12,.04,.15,.12,.18,.28,.09,.03,.09,-.29,.09,.14,.18,.17,-.07,-.07,.2,.24,.17,.24,.11,.13,.29,-.32,.01,.01,.14,.01,-.01,-.12,.01,.06,-.2,-.04,-.03,-.07,.05,-.3,.12,.22,-.28,.16,-.08,.14,.07,.08,-.05,.09,.13,.03,.24,-.1,.15,.14,-.18,-.03,-.17,.3,-.03,.13,.15,0,.2,-.07,.22,-.23,-.05,.15,.01,-.14,-.02,.06,.3,-.1,.03,.1,-.03,.29,.06,0,.31,-.05,0,.05,-.13,.2,0,-.3,-.06,.09,-.1,.24,.25,-.32,.04,.12,-.11,.19,.05,.01,.03,-.08,.05,0,.12,-.1,.02,-.11,-.17,-.2,.13,.24,-.19,-.04,-.11,-.25,.04,-.08,.06,.09,-.14,.09,.15,.15,.1,.04,.05,.06,-.07,.15,-.07,.04,.01,-.04,.02,.12,.04,-.09,.22,.28,.13,-.2,-.15,-.05,-.08,.18,0,-.01,-.14,-.09,-.14,-.2,-.1,-.07,-.11,.21,-.08,.19,.14,.02,-.07,-.03,.02,.07,.19,-.01,.12,-.02,-.11,-.29,.12,.08,-.07,-.02,-.01,.08,-.11,-.01,-.05,.08,.05,0,.28,-.1,.21,.12,-.13,-.02,.17,-.23,.36,.04,.01,.03,.01,.18,.17,.33,-.11,-.04,.13,.24,-.1,-.09,-.19,.08,-.14,.25,.04,-.09,.16,-.1,-.05,.01,-.09,-.22,.06,-.04,.09,-.01,.01,.04,-.12,-.03,.15,.2,0,-.19,.09,-.1,.13,.13,.17,.22,-.02,.03,.22,.07,-.17,-.08,.1,-.08,.27,-.19,.07,.08,.23,.12,.04,.11,-.07,-.04,.17,-.07,-.26,.2,.13,-.34,.16,.16,-.16,-.01,.05,.04,-.13,.03,-.07,-.06,.02,.06,0,-.06,.12,-.12,-.11,.05,.02,.11,.24,-.15,.17,-.16,-.14,.23,-.09,.14,.18,-.1,-.02,-.11,.18,-.22,.14,-.26,-.29,.15,-.05,.05,.09,.14,-.18,.14,.11,.03,-.07,.07,.13,.18,.1,.03,.13,-.07,-.15,-.01,-.09,-.19,0,.08,.01,.11,.17,.13,.26,.03,.16,.05,.26,0,.09,-.09,.09,.06,-.16,.21,.18,-.04,-.23,.23,0,.13,.1,.12,.11,.21,.1,-.07,-.09,.07,.11,.04,-.06,.22,.24,-.03,.13,.16,-.2,-.22,.09,.12,.13,-.02,-.07,.16,-.12,.07,.19,.09,.1,-.16,-.07,.15,-.02,-.11,.24,-.02,.04,.32,.26,.18,.14,.09,.24,.27,.27,.27,.29,.19,.16,.11,.05,.09,.11,.18,.27,.11,-.02,.04,.05,.28,-.02,.32,-.01,0,.09,.05,.02,-.06,.09,.11,-.06,.24,.1,.16,.02,.25,.14,.02,.2,.16,.33,-.06,-.01,.26,-.2,-.02,-.27,.29,-.01,-.09,.07,.12,-.16,-.07,.27,-.23,-.04,.19,.13,.08,.12,-.06,-.12,1,-.16,.04,-.04,-.21,-.08,-.06,.26,-.09,-.27,.03,-.09,-.05,-.06,-.01,.08,.13,.26,.06,0,-.08,-.01,.24,.06,.15,-.09,.16,-.01,-.11,.22,-.16,-.16,-.14,.09,-.06,.02,-.04,.01,.01,.12,.06,.08,-.13,.12,-.04,.22,.09,-.26,.22,.13,.11,.03,.08,.12,.3,-.16,.03,-.26,.18,.04,.2,.2,.24,.23,.15,.17,.26,.2,.18,.08,.28,.03,.08,.23,.09,.1,.09,.27,-.04,.02,-.18,-.03,.02,.06,-.04,.1,.02,.3,0,.32,0,.19,.18,-.09,.06,-.22,-.28,.35,.15,.13,.05,-.05,.3,-.02,.2,.24,.3,.13,-.04,.09,.12,-.11,.17,-.32,.15,.08,.32,.1,.22,-.06,.21,.13,.2,-.01,.13,.34,.14,.25,.19,-.01,.15,.07,-.02,-.08,.13,-.05,.19,.22,-.12,.23,.17,.03,.15,.08,.03,.03,.21,0,.19,.26,.11,.27,-.2,-.11,.13,.1,.02,.08,-.06,.08,.36,-.28,.31,-.13,.12,.24,.19,.14,.25,.17,.33,-.18,.1,-.03,.1,-.16,-.22,.33,-.04,.19,-.08,.34,.11,-.05,-.13,.11,-.03,.3,.03,.06,.06,-.16,.02,.13,.23,.13,.21,-.06,.12,.18,.26,.23,.3,.19,.01,.13,.11,.22,-.13,.27,-.1,-.01,.18,.06,-.02,.27,.11,-.04,.33,-.06,.29,.22,.08,.2,.1,.03,.16,-.16,0,.33,.14,-.22,-.11,.09,.29,.01,.01,.13,.16,0,.25,.21,.18,.3,.13,-.06,-.04,.19,.12,.14,-.09,.33,.28,.32,.02,.24,-.08,.12,.18,.09,.17,.15,.04,.25,.17,.08,-.11,.08,-.06,.3,.01,-.1,.28,.15,0,.19,.1,.13,.06,.08,.06,-.17,.21,.15,-.16,-.04,.04,.05,-.03,-.2,.11,.06,.06,-.01,-.16,.05,.27,.22,.33,-.02,.04,-.1,-.16,-.02,.17,-.24,.02,-.21,.05,.03,.1,.08,-.01,-.06,-.03,.18,.1,.05,.1,.11,.19,.27,.34,.09,-.06,.08,-.06,-.01,.14,-.11,.05,-.06,.02,.06,.08,.18,.04,.14,-.32,-.03,.02,0,.02,-.02,.04,-.2,-.08,.24,.05,-.1,.04,-.06,.23,.27,.23,-.04,-.02,-.06,.08,.06,-.3,-.27,-.2,.1,-.03,.03,.08,-.17,.12,.03,.22,.32,.1,-.01,.09,.03,.13,.25,.36,.25,-.05,.15,0,.1,.19,-.31,.04,.02,.01,.06,.23,.15,.09,-.04,.15,.06,-.03,-.07,.17,0,.22,-.07,-.04,.11,.26,-.12,.03,.03,-.02,.17,.18,.23,.1,.14,.1,.26,.2,-.02,-.06,-.07,-.02,-.06,.2,.1,.07,.06,.08,-.05,-.05,.16,.05,-.05,0,.01,-.02,.22,.28,-.02,.25,-.02,.07,.06,.11,-.05,.01,.07,.17,.23,.22,.18,.03,.06,0,.05,.05,-.2,-.03,.33,.22,.31,-.09,-.06,-.05,.16,-.12,.07,-.08,-.03,.19,.17,.11,.16,.13,-.17,.07,.36,.08,-.14,-.05,.01,.03,.1,.06,.06,.05,0,.06,.03,.06,.03,-.39,.23,.31,.29,.21,.04,-.23,-.07,-.21,-.03,-.08,.01,.23,.13,0,.3,.11,.16,-.03,-.01,-.11,.13,-.17,-.11,.17,-.04,-.14,.12,.04,.07,-.05,.07,.22,.1,-.07,0,.06,-.2,.04,-.01,-.03,.07,.03,.16,.19,.27,0,.3,-.13,-.08,-.15,-.05,.03,0,.13,-.14,-.08,.05,-.1,.03,.2,.05,.19,-.11,-.05,0,.12,.07,-.06,.07,.09,.28,.02,.27,.08,-.24,.13,-.15,-.07,.09,-.1,0,-.02,-.02,.18,-.05,-.04,.11,.2,.01,.12,.2,.1,-.05,.03,.09,-.01,.12,.17,.12,.19,.2,.1,.11,.06,0,.11,-.04,.03,-.09,-.19,-.05,-.12,.22,-.02,-.02,.01,-.04,.04,.01,.18,.11,-.02,.09,.02,-.03,-.07,-.03,.03,.09,.17,.16,.03,.1,-.19,.05,-.28,.24,.03,.15,.12,0,.08,.09,-.32,.12,-.13,-.18,-.01,.07,-.08,.06,-.01,-.04,-.09,.24];export{a as rvalData};
