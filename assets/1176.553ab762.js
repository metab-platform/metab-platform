const a=[-.24,-.03,.19,.08,.22,-.21,-.15,-.17,-.04,-.01,.13,-.4,.05,-.16,.17,-.07,.11,-.09,-.02,-.11,-.06,-.03,.07,.15,.08,.17,-.03,.12,.11,-.02,-.03,-.12,.13,-.04,-.04,.01,.21,.13,-.06,.16,.02,.19,.17,-.02,.12,.09,-.01,-.14,.09,-.04,.01,-.25,-.02,.18,-.15,.15,.03,-.18,.08,.2,-.09,.05,.18,0,-.01,0,.13,.13,-.12,-.01,.3,.08,-.11,.05,.17,-.27,-.17,-.1,-.02,.01,-.01,.19,-.05,.18,-.31,-.09,.16,-.14,-.15,.19,-.09,.03,-.08,-.16,-.3,-.06,-.15,-.03,-.29,-.07,-.01,.1,-.15,-.02,.02,.07,.26,.19,.13,-.09,.07,-.06,-.03,-.09,-.36,.13,-.11,-.02,-.1,.09,-.03,-.08,-.04,-.12,-.01,-.02,.04,-.19,.06,.2,-.21,-.32,0,-.14,.17,-.04,-.09,.18,0,-.22,.14,-.13,.14,.15,-.19,-.17,-.12,-.21,.04,-.07,.12,-.14,-.18,0,-.17,-.13,.09,-.2,-.04,.16,-.16,0,.13,-.16,-.07,-.08,.19,0,-.19,.2,-.21,0,-.23,-.2,.09,0,-.05,.11,-.08,.16,.25,-.22,-.02,.25,-.04,-.03,-.05,-.02,-.07,-.27,-.12,-.2,-.17,.04,.08,.1,.05,-.17,-.03,-.28,.09,.08,.22,.07,-.11,-.04,.08,-.1,-.02,-.09,-.19,.17,-.4,.14,-.17,.12,.04,-.13,-.03,-.05,.02,-.07,-.04,.11,-.13,.21,-.22,-.03,-.33,-.06,-.18,.02,.12,.1,.14,-.12,.19,.1,-.02,.09,-.11,.2,-.16,-.14,-.13,-.18,-.28,.05,.27,-.07,-.24,-.03,-.15,-.25,.13,-.12,.2,-.08,-.04,.19,.44,-.11,-.07,.13,-.09,-.06,.1,.09,.02,.05,-.33,-.16,.16,.14,.09,-.17,.1,-.09,.17,.08,-.11,.09,.08,-.09,-.18,.12,.06,.19,-.3,-.18,-.19,.04,.16,-.25,-.03,.17,.1,-.2,.24,-.02,-.11,.18,-.27,-.08,-.31,.02,-.16,.04,-.14,.11,.23,.1,.05,-.13,-.25,-.04,-.09,-.1,.15,.09,.17,-.46,.15,.12,-.28,-.14,.15,-.11,-.08,-.14,-.21,-.06,-.23,.05,.11,.09,.02,-.06,-.09,-.18,-.05,.18,.02,.04,.2,.16,.05,-.08,.17,-.09,.09,-.19,-.09,-.2,-.11,.12,0,.04,.05,.15,.02,.6,-.14,.15,-.08,-.15,-.19,.24,.04,.26,.06,.09,.03,-.22,-.11,-.36,.16,.18,-.05,-.11,-.02,-.07,-.01,.16,-.01,-.09,.15,-.09,0,.09,.07,.15,-.08,.06,0,.21,-.05,.05,-.13,-.03,-.3,-.21,.09,.04,-.07,-.01,.16,.07,.06,.02,.16,-.07,-.16,.05,-.27,.09,.14,.17,-.11,.05,-.03,.14,-.08,.05,.01,.23,.2,.19,-.11,-.28,-.12,-.21,.07,-.31,-.13,.25,-.1,.17,.23,-.06,.06,.14,.14,-.1,.03,.02,.23,.19,-.08,-.16,.05,.02,-.14,-.04,.01,-.03,-.01,.21,-.27,.03,.21,.1,-.09,-.11,-.13,-.2,.02,-.01,-.21,.17,.25,.22,.01,-.03,-.09,.12,.14,-.04,.09,-.03,.04,.16,0,-.05,.07,.02,-.1,-.13,-.07,.14,-.33,-.43,-.06,-.02,.16,.18,-.19,.06,-.11,-.31,-.14,-.16,-.03,.19,.14,-.1,-.07,.03,.18,-.03,.1,-.22,.19,-.08,.04,-.12,-.17,-.12,-.16,.15,-.01,.17,-.27,-.15,.04,-.2,0,-.02,-.02,.13,-.17,-.18,.23,-.13,-.15,-.23,-.2,-.04,-.19,-.43,.09,-.1,.15,.04,.01,-.14,-.1,.04,.11,.09,.11,.22,.23,.11,.18,.21,-.13,-.05,-.02,-.06,.13,.04,0,-.22,.1,-.09,-.07,.1,-.19,.12,.1,.19,-.03,-.05,.12,.23,-.05,-.23,.01,.04,.01,-.11,.06,-.05,-.08,.2,.22,.07,-.04,.22,0,.09,-.05,.13,-.23,-.17,.11,.22,-.15,-.02,-.04,.18,.16,-.32,.13,.03,-.19,-.06,.08,.05,.08,.16,-.14,-.21,-.1,.1,.19,-.22,.12,-.11,-.21,-.08,-.04,-.17,-.18,-.27,.24,-.01,.08,-.2,.1,.02,-.05,-.11,-.18,-.09,.09,-.12,-.07,-.03,.13,.15,-.07,.09,-.21,.07,-.15,.21,-.21,-.09,.03,-.13,-.11,.21,.15,-.13,.07,-.06,-.05,-.08,.18,.15,.14,-.1,.06,-.17,-.15,-.16,.11,.2,.13,-.06,-.1,.02,-.19,-.19,.12,.2,-.13,.11,.19,-.16,.22,.18,-.27,.14,-.08,.16,.12,-.28,-.06,-.25,-.13,.07,-.13,-.17,-.04,-.05,-.02,-.1,.16,-.13,-.03,.26,-.09,.1,-.11,.09,-.05,0,.12,-.13,-.11,-.17,-.39,-.03,.03,-.26,-.09,0,-.19,.08,.18,.02,.24,.34,-.08,-.05,-.13,.06,-.14,-.28,.1,-.07,-.03,-.1,.21,-.03,.08,.05,.15,.04,-.08,.07,.13,-.12,.08,.18,-.26,0,-.1,-.09,-.26,-.02,.14,-.13,-.17,.11,.04,.12,.07,0,.14,-.16,.13,.18,.12,-.14,-.02,-.12,-.19,-.09,.07,-.11,-.09,-.17,-.21,-.14,.22,0,.19,-.22,-.26,.13,.12,0,-.08,-.1,-.13,-.07,-.05,-.14,0,.15,.18,.01,.24,.15,-.05,-.01,.01,-.08,-.07,.12,.14,-.02,-.02,-.11,-.01,-.07,.06,.13,.08,-.13,-.05,-.09,-.05,.11,.04,.21,-.01,-.11,-.21,.03,.2,.24,-.13,-.07,0,-.06,-.11,.21,-.03,-.31,-.1,-.27,-.04,-.15,-.15,.03,.06,.17,.16,-.12,-.03,.13,.24,0,.05,-.07,-.11,.02,.05,.06,-.24,-.05,-.07,-.1,-.15,-.02,.03,.25,-.16,-.1,-.18,-.16,-.03,-.12,-.04,-.17,-.23,-.11,-.05,-.09,-.13,-.08,.11,-.28,-.08,-.17,-.08,.09,.05,.16,.17,.01,-.08,-.04,.09,-.13,.17,-.15,-.11,-.11,.11,.21,-.08,-.09,.04,.19,-.03,-.3,.16,.15,-.18,.08,-.18,-.15,-.08,-.13,-.17,.07,-.07,-.14,.08,-.07,.02,-.09,-.16,-.01,-.18,.1,-.05,-.04,.13,.17,-.23,.22,.04,-.07,-.19,.19,.15,.19,.12,-.08,-.15,-.11,.02,.14,-.01,-.2,-.09,.19,-.19,.07,-.12,.02,-.1,.21,-.1,.09,-.13,-.19,-.06,.18,.19,-.04,.16,-.07,.13,.08,-.13,-.01,-.04,-.01,.18,-.24,-.07,.17,.13,-.14,.23,-.15,.13,.1,-.17,-.17,-.11,.02,.2,-.16,-.03,-.13,-.1,-.12,-.17,-.04,-.12,-.13,.12,-.19,-.16,-.16,-.08,-.07,.28,.09,.2,-.04,-.26,-.15,-.14,-.08,.02,-.06,-.05,-.03,-.04,-.07,-.08,-.01,-.11,.02,-.09,-.07,-.01,-.22,-.2,.11,.15,.04,.14,-.17,.34,.1,.09,.14,-.07,.11,-.12,-.07,-.07,-.19,-.04,-.11,.21,-.2,-.05,-.01,-.17,.23,.17,-.09,-.08,-.11,-.08,-.05,-.04,.04,-.04,.16,-.36,-.09,.11,-.12,.03,-.12,-.1,.17,.1,-.07,.01,.14,-.08,.04,-.02,.13,.1,-.1,-.1,-.22,-.11,.15,-.14,.08,.19,-.3,-.06,.21,-.16,-.11,.28,.01,-.1,.04,.15,-.08,-.04,.12,.22,-.1,.28,-.16,.1,.11,-.21,-.12,.13,.15,-.28,-.08,-.22,.04,.17,-.05,.21,-.07,.07,-.26,.05,-.07,-.03,.04,-.16,.01,-.2,.16,.07,.21,-.09,.23,-.05,.13,0,.05,.09,.18,-.11,.08,-.07,.14,.26,.02,-.21,.19,.16,-.12,-.13,-.17,.19,-.12,.12,-.04,.09,-.15,.17,.11,.1,.04,-.22,-.18,-.15,.11,-.02,-.06,-.15,-.1,-.13,-.2,.06,-.01,-.27,-.09,.13,-.01,.22,.2,.14,.05,-.12,-.09,-.1,-.2,-.02,1,.23,.07,.14,.09,-.19,-.03,-.23,-.15,.02,-.2,.25,.23,.16,.1,.05,-.22,-.27,-.2,.18,-.1,-.08,.13,.05,.06,.03,-.04,-.04,.14,-.11,.08,-.19,.12,.09,-.2,.14,.03,.11,-.16,.03,-.12,-.12,.18,.12,-.02,-.06,.14,-.07,-.15,-.18,-.08,-.04,.09,-.07,-.07,.07,-.2,.19,.09,.21,.1,.06,.13,0,-.18,.2,.21,.12,-.04,-.13,-.16,.02,-.03,.15,-.06,.15,.09,-.21,-.11,-.11,-.13,.03,-.12,-.17,.09,-.16,.18,-.07,-.26,.16,-.13,-.02,.01,-.17,-.07,.16,-.03,.03,.19,0,-.22,.18,-.1,-.21,.27,.02,-.21,.09,-.18,-.05,-.16,.21,.04,-.07,-.04,-.16,.16,.14,-.01,-.13,-.14,-.19,.08,.2,.03,.17,-.02,-.08,-.08,-.1,.2,-.15,-.18,.19,-.16,-.06,.19,-.23,-.04,-.12,.09,-.08,0,.18,-.17,-.12,-.19,-.02,-.11,-.11,-.08,.14,.18,.08,0,.04,.14,-.21,.1,.04,.01,-.27,.05,-.06,.09,-.03,.06,-.07,.1,-.17,-.09,.16,.01,0,.17,-.06,-.14,-.02,.01,.03,-.12,-.08,-.11,-.19,-.16,-.11,-.04,.05,-.25,-.09,-.16,.06,-.1,.03,-.09,-.04,-.22,-.14,.1,0,-.21,-.26,-.23,-.1,-.26,.03,-.26,-.25,.03,-.13,-.05,.12,.03,-.03,.03,.01,-.08,-.13,-.06,.2,.02,-.21,-.04,.21,.14,-.05,.09,.31,.21,-.01,.17,.1,-.04,.01,-.29,.08,.2,-.2,-.29,-.17,.26,-.1,.14,.02,.07,.12,-.02,.11,-.1,.07,-.02,.18,-.17,-.03,.16,-.03,-.11,.09,-.01,.17,.15,-.21,-.21,-.06,-.1,0,.15,-.19,.2,-.19,-.17,-.05,-.03,-.12,-.05,-.13,-.07,-.23,.07,.22,.11,.1,-.14,-.06,-.08,-.07,.08,-.14,-.08,-.08,.05,.17,-.24,-.09,-.18,-.1,-.01,-.25,-.01,0,.04,.04,-.07,-.12,-.07,-.27,-.06,-.05,.03,-.23,-.08,-.1,-.16,.09,.01,-.27,.03,-.01,-.08,0,.12,-.06,-.14,-.04,-.01,.02,.01,.25,.04,-.01,-.04,.24,.07,-.13,.01,.08,.12,.07,-.09,.05,.19,.17,.06,.1,.14,-.04,-.01,-.07,-.11,.06,.01,.15,-.15,.04,-.03,-.07,.03,-.14,-.05,.01,-.05,-.05,.03,-.04,.2,.12,-.06,.11,.06,.04,.01,-.01,-.17,.11,.06,.06,-.03,.05,.14,-.12,-.04,.09,.43,.06,.2,-.1,-.13,.21,.04,-.07,-.21,.16,0,.15,-.01,.15,.15,.04,.12,-.14,.18,-.15,-.01,-.04,.16,-.2,0,.05,.01,.09,-.05,-.1,.25,.09,.13,.15,-.01,.09,-.1,-.02,-.11,.22,-.07,-.13,.09,.03,0,-.01,-.11,.16,.21,-.13,-.03,.05,-.06,0,.12,-.11,0,.11,-.01,-.03,.1,-.11,.06,-.05,.14,-.06,-.12,-.06,-.13,.13,.01,-.11,.05,.18,.03,-.08,.21,-.03,.12,-.04,.1,.09,.13,.11,.18,-.1,-.06,-.18,-.07,-.24,-.01,-.13,.14,.07,.17,-.04,.21,-.13,.07,-.02,-.21,.01,-.1,.09,.17,.2,.08,.09,-.26,.09,-.06,0,-.05,-.12,.02,-.15,-.17,.11,-.07,.01,-.06,.16,.06,.01,.18,.09,-.08,.1,-.11,.02,.08,.01,-.25,-.02,.02,-.08,-.13,-.15,.03,.11,.17,-.21,.04,.18,.15,.11,.14,.22,.14,.06,-.06,.17,0,-.03,-.1,-.04,-.04,-.07,.2,.15,.16,.06,.22,.11,-.02,.11,-.03,.1,.13,-.01,-.21,.09,-.18,.1,-.12,-.3,.09,.09,.01,-.21,-.11,-.05,.19,-.14,-.13,-.06,.05,.12,-.05,.12,.04,.05,.09,-.03,.04,-.04,.14,.04,.06,-.18,.04,-.27,.05,-.08,.05,-.24,0,-.03,.07,-.01,-.06,-.01,.06,-.07,.21,.24,-.11,.17,-.24,.08,.05,.12,.15,.23,.21,.25,.1,-.13,.02,.03,-.04,.14,.1,.11,.13,.04,-.04,-.06,0,-.09,.16,.16,.13,-.12,.01,.25,-.1,.19,-.04,-.14,.1,.05,.18,.14,.15,.2,.26,.09,-.13,.02,.06,.06,.06,-.11,.03,-.18,.1,.17,.03,.08,-.07,.15,-.14,.16,.16,.1,-.14,.02,-.14,-.21,.1,-.2,-.14,-.25,.18,-.11,.19,-.27,-.11,.25,.15,-.15,-.34,.24,-.18,-.07,-.18,-.01,.05,.18,-.28,-.24,-.24,.29,.1,-.06,-.18,.01,-.09,-.09,-.19,.2,.08,.18,.13,.2,-.24,-.07,-.08,.04,.07,-.08,.11,-.1,-.13,-.01,-.11,.08,.08,.13,0,.02,.05,.19,-.08,.14,-.1,.12,-.15,.18,.17,.13,-.2,.15,.23,-.02,-.07,.16,.19,-.04,-.13,-.06,-.05,-.03,.15,.18,.09,.09,-.08,-.06,.2,-.16,-.08,.17,-.09,.14,.08,.1,-.03,-.09,.14,-.12,.09,-.12,.09,-.2,-.05,.1,-.06,-.13,.04,.01,.05,.2,.24,.09,.04,.16,.21,.26,.12,.18,-.03,-.17,-.08,.18,-.11,0,-.17,-.09,-.07,.22,.16,-.18,.09,-.25,-.22,.2,.31,-.09,-.13,-.08,.07,-.1,.26,.25,.22,.22,.16,.18,-.04,.2,-.07,-.11,.08,-.26,-.13,-.03,.24,.22,-.17,-.02,-.17,-.16,.26,-.01,.13,.01,.22,-.12,-.14,.1,-.15,.14,.12,.25,-.04,.11,-.06,.06,.09,-.12,.11,.1,.14,-.06,.2,.19,.21,.04,.22,.17,-.02,.11,.2,.19,.17,.21,.2,-.2,.06,.13,-.05,-.05,.21,-.17,.2,-.3,.02,.06,-.04,.18,.09,-.08,.18,.05,-.15,.17,-.12,.06,.05,.15,-.04,.06,-.1,-.1,.14,.04,.08,-.12,-.07,.24,-.17,.18,-.1];export{a as rvalData};
