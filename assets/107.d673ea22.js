const a=[.03,.11,-.18,.08,-.11,-.16,.07,-.28,.15,-.31,-.06,-.24,.03,.18,-.01,-.06,-.05,-.05,.11,-.07,-.13,.06,-.07,.18,-.04,.04,.2,.04,.2,.24,-.11,.06,-.18,0,-.13,.06,-.03,.09,.13,.1,.11,.01,-.11,0,-.02,.09,.18,-.14,.19,-.08,-.11,-.07,-.05,.1,-.33,.02,-.08,-.11,-.04,.04,-.34,-.19,-.01,.08,.1,-.01,-.11,.09,-.04,-.03,.09,.03,-.33,-.05,.01,-.05,.29,-.39,-.1,-.1,.19,.15,.01,.11,-.2,.15,.03,-.11,-.01,.04,-.39,0,-.12,.05,-.3,-.14,.07,.08,-.17,-.31,-.05,-.08,-.2,.02,-.11,.23,1,.82,-.03,-.13,.11,-.31,.1,.13,-.35,.06,-.14,0,-.05,-.04,.26,.05,-.31,.06,-.01,-.11,-.13,-.24,-.03,-.02,-.31,-.3,-.05,-.21,-.02,.13,-.25,.1,.01,.01,-.16,.08,-.01,-.02,.03,-.09,.03,-.21,-.2,-.18,-.07,-.29,-.03,-.08,-.23,-.49,.19,-.11,-.06,.09,-.42,-.24,.07,-.23,-.22,-.35,-.07,-.05,-.25,.12,.01,-.11,-.36,-.28,.06,.08,-.07,.36,-.26,0,.19,-.01,-.17,.07,-.18,-.05,-.06,-.1,-.47,-.16,.05,-.44,-.09,-.12,-.23,-.24,-.17,-.38,.01,-.06,.07,-.19,-.03,-.03,.02,-.35,.02,-.24,-.22,.06,-.32,.12,-.31,-.03,-.11,.1,.1,-.28,.07,.42,-.07,-.09,-.22,-.03,-.12,-.03,-.38,-.06,-.46,-.1,.07,-.06,.15,-.12,-.05,0,.1,.08,-.14,.03,-.35,.15,-.18,-.2,-.19,-.36,-.13,.08,-.01,-.03,-.38,.18,-.34,-.32,-.21,.21,-.04,-.25,-.05,-.05,.21,-.33,-.3,-.19,-.22,-.12,.09,-.03,-.16,.16,-.05,-.15,-.12,-.13,-.04,.09,.17,-.26,-.17,.21,-.36,.48,.01,.18,-.19,0,.27,-.01,-.24,-.01,-.36,-.18,-.03,-.33,-.11,-.17,-.03,-.04,-.04,-.13,-.08,-.14,-.09,.12,-.13,-.03,-.14,-.15,-.35,.04,-.01,.03,.17,.11,-.45,-.13,-.05,-.4,-.13,-.07,.11,-.19,.04,-.02,-.15,-.15,-.03,-.14,-.21,-.13,.09,-.1,0,.29,.21,.24,-.06,-.15,-.25,-.06,-.21,-.2,.06,.03,.03,-.13,-.01,-.31,-.13,-.06,-.14,-.09,-.13,-.2,.12,.05,-.18,.13,-.19,-.09,.17,0,-.17,.73,-.1,.25,-.05,-.05,-.37,.34,.13,.15,.3,-.1,-.43,-.18,-.1,.02,.01,-.33,.04,.04,.09,.07,-.07,-.04,-.08,-.06,-.16,-.15,-.22,.06,.04,-.16,-.14,-.12,.09,.15,-.2,-.05,-.16,-.15,-.2,.24,-.34,-.07,.08,-.23,-.06,-.12,-.13,.05,-.29,-.23,-.39,.15,-.16,-.05,-.36,.09,-.05,-.02,-.06,.14,.08,.01,-.08,.16,-.16,-.2,-.17,-.13,-.05,-.19,-.28,.13,-.26,-.08,-.05,-.35,-.24,.04,0,.23,-.06,-.32,-.07,-.01,.18,.08,-.29,-.16,.16,-.13,.09,-.26,.23,-.03,-.28,-.28,-.05,-.13,.11,-.31,-.1,-.36,.24,-.29,-.07,.04,.87,0,-.21,0,-.34,-.09,-.18,-.21,-.23,.32,-.11,.03,-.27,-.17,-.12,-.05,-.32,-.17,-.03,-.13,-.09,-.23,.21,-.12,-.24,.01,-.18,.13,-.45,-.28,-.26,-.12,-.27,.22,.05,.04,-.17,-.23,.02,-.44,-.25,-.18,.03,.04,-.1,.03,-.56,-.11,-.31,.06,-.04,-.23,-.4,-.03,.02,.01,.11,-.18,.02,-.13,-.28,-.14,.15,-.08,.01,-.01,-.33,-.08,-.25,-.17,-.22,-.39,.07,.32,-.13,-.02,.04,.31,-.03,.26,.32,-.02,-.07,-.03,-.04,.06,.14,-.07,.21,.07,-.07,.12,.05,-.25,.16,.19,.12,.03,-.55,-.18,-.16,-.08,-.09,-.16,-.17,-.04,.02,-.13,-.25,.18,-.11,-.26,-.11,-.05,-.26,.06,-.12,-.01,-.01,-.02,.09,0,.17,-.18,-.23,.12,-.18,-.03,-.27,-.27,-.48,.01,-.24,-.33,-.17,.19,-.39,-.09,-.05,.29,.15,.06,-.05,-.5,.18,.03,-.15,-.39,.12,-.1,-.05,-.15,-.2,-.1,-.26,-.25,.05,-.48,-.23,-.2,.13,.23,-.04,-.3,-.29,-.18,-.1,-.18,-.16,.14,-.12,0,.03,.03,-.25,-.22,-.24,.18,.01,-.25,.06,.14,-.11,-.11,-.08,-.25,.03,.04,.07,.03,-.14,-.17,-.07,-.41,-.19,-.27,-.01,-.09,.04,.06,.34,-.14,.19,.29,-.24,-.38,-.09,.02,-.02,.04,.25,-.18,.12,.17,-.35,-.08,.3,.08,-.04,-.35,.18,-.03,-.28,.15,0,.04,-.25,-.29,-.06,.07,.08,-.25,-.1,-.02,-.25,.11,.01,-.01,-.03,.26,-.17,-.21,-.27,-.42,-.14,-.13,.24,-.31,-.01,.06,-.28,-.25,-.05,.12,.13,0,-.06,.09,.05,-.17,.1,-.37,-.16,.04,-.07,-.3,0,-.1,0,.09,.12,-.23,.06,.36,.07,.03,.31,.03,-.17,-.33,.02,-.02,-.12,.17,-.03,-.21,-.07,.04,-.1,-.13,-.03,.06,-.08,-.4,-.01,-.01,-.06,.05,.06,.09,-.29,-.22,-.17,-.03,-.37,-.05,-.21,-.2,-.09,-.35,-.05,-.23,-.19,-.06,-.17,-.28,-.14,-.35,-.34,.06,.08,-.15,-.26,.19,.02,-.02,-.09,.02,.2,-.19,.18,.17,.16,-.18,-.15,-.04,-.33,-.1,-.39,.06,-.09,.07,-.14,-.07,-.13,-.17,.24,.22,.34,-.04,.09,.21,-.29,-.06,.23,.02,.03,-.31,.28,.05,-.23,-.05,-.07,-.11,-.09,.1,.14,-.26,-.13,.14,-.23,.08,.22,-.12,.1,-.18,.86,.05,-.1,.04,-.11,.07,.23,-.15,-.04,-.05,-.43,-.38,-.21,-.01,-.13,.03,-.06,.1,-.24,-.4,.2,-.15,.1,-.21,-.02,-.26,.07,-.37,-.28,-.35,.27,-.17,.01,-.03,.19,-.14,-.18,0,-.01,.02,-.25,-.07,-.3,-.23,.05,.09,.02,-.36,-.16,.23,.1,.11,-.04,-.1,-.19,.09,.17,.04,.03,-.06,.15,-.33,.01,-.14,0,.36,-.03,-.23,-.14,-.27,-.12,-.23,-.15,-.15,-.33,.18,.09,-.18,-.29,-.12,-.12,.01,-.23,-.37,-.49,-.09,-.02,-.02,-.04,.18,-.34,-.02,-.09,-.14,-.08,-.18,-.28,-.04,-.21,.02,-.17,-.28,-.05,.21,-.18,-.1,-.06,-.16,-.13,.1,-.07,0,-.02,-.29,0,-.15,-.24,-.07,-.23,-.04,0,-.44,.01,.29,.3,-.26,.08,.16,.13,.23,-.14,-.27,-.31,-.31,0,-.25,.1,-.18,-.43,-.16,-.2,-.13,-.12,-.32,-.11,-.37,-.27,-.34,.11,-.24,.02,0,-.08,-.03,.02,.05,-.27,-.06,.13,.1,.04,.07,.21,-.2,.02,-.29,-.14,.38,-.11,-.16,-.29,-.02,-.24,.06,.02,0,.1,-.34,.2,-.09,-.14,-.21,0,.09,-.19,-.01,-.21,-.18,-.04,-.26,-.04,-.33,0,.18,-.27,-.03,.58,.23,0,-.37,-.19,.01,-.01,-.11,-.13,-.15,-.26,-.32,.02,-.2,.18,.02,-.24,.01,.41,-.08,-.13,.05,-.35,.07,-.05,.11,-.13,.22,-.19,-.18,-.34,-.02,-.16,.02,-.03,-.22,-.28,.08,.02,.01,.07,.08,-.31,.26,.15,.03,.05,.04,.44,-.06,-.04,-.09,-.11,-.07,-.27,-.05,-.14,-.08,-.33,.24,-.08,.12,-.08,.13,-.23,-.13,-.15,-.22,.06,-.38,-.3,.13,.02,.24,.01,.06,-.18,-.01,0,.16,.05,-.04,.16,0,.15,.11,-.37,.19,-.11,-.06,.03,.11,.03,-.15,-.01,-.25,.02,-.3,.02,-.17,-.17,-.39,-.2,.07,-.03,.05,-.16,.01,.01,-.23,-.16,-.11,-.15,-.2,.1,-.14,-.14,-.02,-.15,-.44,-.04,-.15,0,-.24,-.04,.25,-.1,-.16,-.25,-.31,-.01,-.18,-.16,.26,.03,.12,.19,.14,-.28,.03,-.08,-.16,.22,-.11,.07,-.01,.11,-.03,.35,-.51,-.26,-.13,-.15,-.1,-.07,-.13,-.31,.22,-.11,-.18,-.22,-.11,-.15,-.21,-.12,-.18,-.01,-.39,-.19,.21,.13,-.13,-.1,-.15,.26,.11,.02,-.17,-.11,-.05,-.2,.09,.06,-.38,-.12,.42,-.27,-.4,.14,-.26,-.04,-.2,-.16,-.22,.01,-.08,-.1,.04,-.02,.04,-.05,.04,.09,-.14,-.04,.02,-.03,-.06,0,.06,.04,-.41,-.18,.17,-.19,.17,-.18,-.15,.11,-.12,.16,-.3,.22,-.32,.2,-.02,-.37,-.06,.11,-.06,-.13,.34,-.08,-.32,.13,-.05,-.13,.02,-.1,-.19,.08,-.18,.05,.06,-.15,.06,.06,-.11,-.34,.08,-.05,-.24,-.38,-.2,-.14,-.27,-.15,-.26,.02,-.17,.18,.19,.14,.05,-.34,-.32,-.04,-.06,-.15,-.07,.05,-.09,-.08,.04,-.31,-.26,-.01,.01,.13,-.17,.07,-.13,-.32,-.25,-.06,.03,-.04,.36,.08,-.12,-.34,.06,.3,-.07,-.32,.13,0,-.13,-.32,.04,.36,.16,-.29,-.06,.07,-.27,.1,.02,-.25,-.24,-.3,0,-.07,-.12,-.08,-.2,-.24,-.17,-.3,-.2,.03,-.33,-.06,-.26,-.1,-.27,.18,.3,0,-.36,-.27,-.19,-.03,-.41,-.36,-.24,-.14,-.36,.07,-.46,-.43,.19,-.33,-.49,.15,.05,-.19,-.12,-.18,-.22,-.07,-.24,-.03,-.11,-.19,.26,-.16,.14,-.23,.01,.17,-.02,-.05,.07,.32,-.23,.13,-.07,-.19,-.05,-.11,-.21,.06,.02,.04,.08,-.2,.09,0,-.16,.04,-.18,-.05,.03,-.06,.13,.03,.03,-.08,-.25,-.07,-.33,.04,.01,-.16,-.07,-.39,-.14,-.35,.14,-.22,-.04,.02,-.17,.03,-.14,.18,-.18,.09,-.08,-.07,-.04,.06,.01,0,-.11,.04,.04,-.09,-.13,-.19,.08,-.27,-.13,.01,.2,-.18,-.22,-.27,.19,-.25,.03,-.24,-.14,-.18,-.2,-.29,.29,-.3,-.11,.17,.06,-.24,-.11,-.26,-.27,.17,-.15,-.32,-.4,-.23,.02,-.13,-.12,.06,.07,.07,-.33,-.06,-.2,-.01,-.12,.27,-.23,.08,-.1,-.31,0,-.05,.25,.05,-.31,.04,.2,.01,.05,-.11,.12,-.31,-.31,-.11,-.09,.32,-.08,-.13,.1,.18,.05,-.19,-.16,-.14,-.08,-.21,.04,-.28,-.11,-.3,-.17,-.13,-.21,-.18,-.25,-.17,.09,-.2,.02,.06,-.06,-.02,.03,-.1,-.06,.02,-.31,-.03,.22,-.1,-.03,-.13,.14,-.11,.06,-.04,-.27,-.14,-.12,.06,-.21,-.02,-.12,-.05,-.04,.05,-.16,-.21,.08,-.23,.05,-.2,0,-.24,-.05,-.17,-.3,-.26,.15,-.16,-.08,-.01,.09,.25,-.26,.15,-.1,-.02,-.18,.02,-.02,.14,-.14,-.04,-.17,.06,-.05,.06,.21,-.21,-.17,-.22,-.1,.18,.31,-.01,-.01,-.26,-.08,-.23,-.13,-.08,-.05,.15,-.28,.26,-.15,-.03,.05,.16,.15,-.17,-.08,-.13,-.04,-.27,-.06,-.18,-.18,.01,-.08,.02,.07,-.21,.2,-.52,-.25,-.22,-.12,.11,.1,-.18,-.01,-.16,.01,-.24,.07,-.19,-.48,-.09,-.19,.15,-.09,-.13,-.19,-.13,-.33,-.11,-.23,-.2,-.21,-.03,-.08,.2,-.14,-.08,.12,-.28,.11,-.13,-.11,-.21,.03,.23,-.35,.15,-.15,.07,.15,-.13,-.29,.19,.06,-.23,.11,-.03,-.16,-.24,.05,-.42,-.04,.04,.05,-.07,.17,-.06,-.03,.03,0,.08,-.06,.15,-.05,-.16,-.08,-.1,-.1,-.18,-.18,.13,-.01,-.18,.18,.19,.09,-.22,-.18,-.33,.12,.02,.04,.06,-.04,-.25,-.18,-.23,-.38,-.3,-.2,-.19,-.01,-.01,-.1,-.04,-.15,-.22,-.11,-.05,.01,-.21,-.07,.11,-.16,-.3,-.06,.19,.05,.16,.05,-.11,.02,-.12,.21,.1,-.02,.25,-.14,-.02,-.21,-.19,-.11,.22,.02,-.05,.17,-.11,-.34,.27,.24,.14,-.14,-.09,-.02,.16,.1,-.17,-.21,-.09,-.28,-.08,.19,-.18,-.18,-.07,-.22,-.23,-.11,-.09,-.14,.08,-.21,-.34,.11,.87,-.19,.02,-.18,-.3,.02,-.04,-.12,-.06,-.1,-.05,.06,-.27,.06,-.25,.11,.16,-.32,-.39,.07,-.22,-.09,-.11,-.19,.07,-.33,-.09,-.27,-.18,.02,-.14,-.04,.06,.06,-.03,-.22,-.19,-.4,-.36,-.08,.21,.07,-.38,-.36,.77,.21,.14,-.14,.08,-.08,-.33,-.06,-.33,.12,.06,-.45,-.32,-.38,.11,-.03,.02,-.32,-.2,-.31,-.19,-.29,.01,.04,.11,.02,-.03,-.33,-.29,-.31,0,0,-.16,-.09,.07,.05,.02,.22,.01,-.1,-.18,-.22,.2,.21,0,-.29,0,-.01,.21,0,.09,-.17,.07,-.16,.02,.21,-.34,.05,-.17,.04,.13,-.2,-.13,-.33,-.24,.13,.21,-.2,-.06,.03,.02,-.07,-.03,-.01,-.02,-.26,.06,-.12,-.07,-.07,-.05,-.08,.16,0,-.37,.09,-.32,-.03,-.04,-.25,.11,-.05,-.32,-.16,-.04,-.07,-.22,-.09,-.03,-.02,.06,.01,.02,-.08,-.13,-.12,.03,-.27,-.1,-.04,.29,.06,.04,.03,-.17,0,-.05,-.22,-.03,.92,-.13,-.2,-.25,.22,.02,.94,.15,.01,-.16,.18,-.07,-.25,.11,-.22,-.19,-.04,-.28,.11,-.11,.22,0,-.08,-.1,.04,-.24,.16,-.03,-.2,-.39,-.02,-.05,.02,.01,.09,.01,-.27,0,.03,0,-.35,-.17,.04,-.2,.06,-.22,.01,-.37,-.02,.04,.07,-.09,-.01,.17,-.25,.3,-.03,.04,-.01,.03,.01,-.26,-.23,.02,-.25,.36,0,-.02,-.06,-.31,-.02,-.24,.03,.02,-.08,.02,.05,.07,-.2,-.15,.05,-.09,.02,.06,.04,.19,-.09,.02,.02,-.07,.23,.05,-.12,0,-.08,0,-.3];export{a as rvalData};
