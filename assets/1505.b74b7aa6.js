const a=[.09,-.23,-.39,.11,-.29,-.11,.04,-.12,-.24,-.11,-.35,.07,.11,.52,-.38,.01,-.23,.09,.36,.09,-.11,.11,.01,-.19,-.4,-.29,.22,.16,.21,.17,-.18,.19,-.4,-.11,-.37,-.09,-.42,-.33,-.01,-.27,.09,-.29,-.11,.06,-.08,-.24,-.03,.09,.16,-.19,-.17,-.07,-.01,-.36,-.21,-.31,-.27,-.11,-.03,-.34,-.29,-.38,-.32,0,.16,.21,-.35,-.31,.2,.07,-.01,-.23,-.2,.25,-.25,-.15,.04,-.27,-.35,.24,.19,-.17,-.15,-.18,.26,.14,-.21,-.15,.29,-.36,.09,.05,-.17,.31,.02,.11,.33,-.04,.25,-.23,-.01,-.37,-.19,-.04,-.26,.13,.27,.23,-.3,-.39,-.04,-.25,-.03,.27,.1,-.31,-.02,.11,.16,-.38,.05,.34,-.28,.11,.05,-.25,-.28,.1,.11,-.4,-.04,.2,-.09,-.15,-.2,.08,-.07,-.12,.17,-.03,-.3,-.11,-.13,-.23,-.1,-.12,-.02,.29,-.34,-.02,-.37,-.19,-.14,-.14,-.02,.03,.25,.01,-.01,-.38,-.1,-.4,-.16,-.17,-.22,-.28,-.38,.22,-.14,-.35,-.07,.15,.01,.11,-.21,.11,-.06,.17,-.26,-.32,.03,.03,-.13,-.34,-.27,.08,-.22,-.14,-.24,.13,.26,-.28,.03,-.3,-.44,-.5,-.31,-.3,-.11,.17,-.24,-.31,-.41,-.16,.28,-.24,.17,-.23,-.2,.24,-.08,-.34,.05,-.37,-.13,-.13,.05,-.06,.08,.16,-.15,-.23,-.21,-.37,-.19,-.41,-.12,.1,-.17,-.1,.02,.04,-.07,-.38,-.06,-.11,-.24,-.19,.12,-.05,-.26,-.29,.13,.12,-.14,-.06,.01,-.26,-.06,.19,-.27,.36,-.2,-.08,-.31,.05,-.14,-.46,-.06,-.37,-.01,.25,-.42,-.31,.14,-.22,.15,-.23,-.17,-.24,.2,-.03,-.41,-.42,-.45,.05,.08,-.29,-.43,.18,-.15,.19,-.36,.42,-.01,-.37,.04,-.4,-.08,.16,-.17,-.17,-.27,-.1,-.09,-.12,-.15,.12,-.31,-.1,.03,-.33,.21,.03,-.02,-.03,-.08,-.36,.08,-.22,-.22,.04,.21,-.1,-.15,-.08,-.13,.15,-.36,-.25,-.15,.22,-.33,-.32,-.07,.04,-.26,.27,-.23,-.04,.15,-.16,.08,.05,.31,-.06,.2,-.17,-.07,-.08,-.21,-.11,.19,.09,-.38,-.37,-.05,-.06,-.09,.03,-.38,.09,-.19,.02,.32,-.34,-.36,.03,-.38,-.43,-.23,-.23,.08,.24,.05,.33,-.11,-.38,-.04,.07,.09,.12,-.1,0,-.27,.02,-.01,-.23,-.06,-.08,-.06,.12,.03,-.07,-.1,-.22,.04,.18,-.41,-.38,-.46,.09,-.1,-.2,-.13,-.33,.17,.05,.23,.04,.29,.14,-.42,-.21,-.19,.13,-.2,-.45,-.33,-.15,-.34,.21,.04,-.44,.04,-.05,-.3,-.24,-.13,.17,-.2,-.3,-.03,.06,-.17,-.39,-.39,.03,-.01,.16,.1,.02,-.37,-.23,.02,-.31,.04,-.31,-.31,-.47,-.3,-.21,-.16,0,-.18,-.2,-.34,-.21,-.06,.26,-.3,-.34,.39,.13,-.04,0,.17,-.39,-.05,-.5,-.34,-.28,.32,-.27,-.08,-.2,.34,.07,.13,-.4,.18,-.4,-.36,-.2,.01,-.39,-.33,-.32,-.5,.24,-.31,-.38,-.4,-.23,-.21,.09,-.28,.03,-.03,-.34,.02,.04,.14,.2,-.38,-.36,-.1,-.04,-.52,.17,.06,.16,-.41,-.2,-.26,.11,.31,-.45,-.26,-.19,-.4,.04,-.16,.06,-.25,.1,-.26,-.03,-.21,-.27,.19,-.36,-.01,.03,-.02,-.06,-.06,-.23,-.14,-.19,-.18,-.1,.08,.06,0,-.11,-.01,0,.21,.08,-.1,.13,.21,.25,.09,.2,.02,.19,-.33,.32,.08,-.4,-.36,-.44,-.4,.12,.21,.25,.32,.16,-.44,.09,.02,-.18,.08,0,-.04,-.09,-.27,-.05,-.37,-.35,-.21,.05,-.37,-.31,.25,.2,-.29,-.07,.1,-.14,-.31,.05,-.39,-.26,-.36,-.24,.03,-.42,.04,.01,0,-.41,-.12,.33,-.45,-.34,-.2,-.17,-.49,-.32,-.36,-.26,-.3,.18,.11,.17,-.12,.34,.07,-.42,.05,-.29,.12,-.08,-.33,-.05,.03,-.07,.12,-.03,-.07,.03,.12,.07,-.13,-.01,-.31,.04,.19,.14,.05,-.29,-.22,-.28,-.37,.04,-.17,.22,-.14,-.23,.16,.11,-.09,-.29,.26,-.23,-.1,-.36,-.02,.37,.1,-.35,-.39,-.12,-.37,.1,.16,-.16,-.35,-.1,-.39,.09,-.17,-.19,-.06,.13,-.22,-.24,-.15,.02,.01,.19,-.16,.2,-.43,-.27,.32,-.09,-.12,.26,-.18,-.34,-.05,-.14,.24,-.24,-.36,-.14,.07,.2,.23,.24,-.03,.01,-.29,-.39,-.32,.24,-.16,-.12,-.24,-.26,.02,-.06,.05,-.18,-.09,.18,-.45,-.02,-.29,-.3,.03,.15,.09,-.07,.07,0,-.09,-.29,-.44,.06,-.23,-.1,.12,.08,.03,-.25,.34,-.07,-.39,-.04,-.13,-.02,-.39,.06,.12,.01,-.34,-.3,.04,.25,0,.16,-.2,-.41,.13,-.27,-.03,0,.2,.11,-.44,-.16,-.06,-.03,-.22,-.04,.03,.24,-.34,-.25,.06,-.33,-.3,.12,.11,-.11,.26,.15,-.36,-.1,.01,.21,-.17,-.14,-.33,.08,-.42,.09,-.01,-.25,-.39,-.37,-.15,-.28,-.06,-.09,.26,.23,-.35,-.23,-.29,.23,-.35,-.19,.3,-.19,.11,.06,.21,-.39,-.48,-.15,-.26,-.09,.08,.01,-.02,.19,-.38,.2,-.17,.04,.31,.22,.1,-.33,-.02,-.05,-.14,-.28,.05,-.37,.03,-.16,.17,.07,.08,-.41,0,.31,.2,.17,.08,-.28,-.22,.19,-.17,-.31,.24,.12,-.1,-.43,.16,.01,-.21,-.01,-.07,.14,-.29,.09,-.03,-.12,.09,.13,-.23,.11,-.29,-.35,-.03,.28,.25,.22,.4,-.22,.28,.08,.09,-.16,.16,.02,.15,.12,.27,-.16,.01,-.08,.18,-.33,-.2,-.3,-.33,-.05,.01,.01,-.36,.1,-.24,.38,.32,-.29,-.23,-.01,.1,.13,-.13,-.36,-.31,.14,-.09,.01,-.09,-.34,-.01,-.02,-.17,-.03,-.06,.25,-.05,.22,-.31,-.21,-.2,.09,.14,-.09,.13,.24,.18,-.19,-.36,-.32,-.04,-.33,-.43,.17,-.27,-.33,-.28,-.3,-.15,.36,-.32,.13,-.28,-.33,-.11,-.07,.06,-.23,.05,.18,-.13,-.53,-.06,.1,.05,-.11,.2,-.04,.03,-.12,-.34,.24,-.27,-.18,-.3,-.23,.14,-.05,-.31,-.06,.18,-.39,.24,.24,.14,.15,-.28,.39,-.19,-.14,-.06,-.05,-.25,-.41,-.32,.02,.25,-.07,-.34,.06,.28,-.18,-.15,-.27,-.22,.05,-.09,.02,.03,-.03,-.15,-.24,-.02,.02,.03,-.06,-.14,-.09,-.04,-.07,-.08,-.08,.09,-.03,.07,-.34,-.16,.13,-.07,.18,-.27,.26,.26,-.2,-.22,.17,-.15,-.17,-.05,.15,-.47,-.2,-.18,.18,.01,-.01,.09,-.01,.07,-.25,-.34,-.16,-.08,0,-.06,-.34,.27,.2,-.07,.04,-.02,.24,.28,-.08,-.08,-.35,-.06,-.24,-.12,-.16,.23,.06,.13,-.29,.1,-.04,-.18,-.28,-.22,-.04,.23,-.15,-.21,.01,-.13,-.19,-.2,-.44,-.08,-.09,-.4,.05,-.24,-.32,-.07,.15,.05,-.11,-.33,.09,-.06,.17,.11,-.2,.29,.36,-.28,.1,-.41,-.26,-.13,.19,-.39,-.24,-.12,.09,.09,-.28,-.44,-.25,-.19,-.01,-.25,-.13,.2,-.21,-.32,.04,.1,.18,.23,-.32,-.23,-.31,.05,-.32,0,-.24,.25,-.11,-.08,-.35,.13,.16,.11,-.26,-.29,.13,-.1,-.29,-.34,.18,-.1,.06,-.27,-.24,-.18,-.3,-.28,-.09,-.28,-.19,-.36,.06,-.09,.07,-.18,-.33,-.11,.15,-.08,.02,-.06,-.08,-.38,-.51,-.03,-.09,-.28,-.37,-.31,-.26,-.42,-.21,-.17,-.21,.48,-.03,-.35,-.01,-.37,-.2,-.25,-.01,.17,.16,-.23,.16,.14,-.22,-.27,-.38,.33,-.43,.35,-.24,.1,-.1,-.43,0,.13,-.4,-.41,.37,.07,-.32,-.16,-.41,.13,-.35,.16,-.38,-.33,-.13,-.41,0,.06,.11,-.44,.01,.07,-.17,-.19,.05,.11,-.25,-.4,-.08,-.09,.06,.17,.2,.06,.12,.28,.16,-.43,.04,-.31,-.41,-.33,-.15,.03,-.09,-.4,-.3,-.46,.02,-.09,.06,-.1,-.17,-.16,-.09,-.35,.07,.01,.09,-.15,-.1,-.19,.25,.07,-.35,.27,-.36,-.07,-.05,.08,-.25,.2,.18,-.2,-.1,-.35,.13,-.42,0,-.11,.01,.01,.09,-.03,0,-.22,-.11,-.35,-.03,-.1,-.1,-.37,-.01,-.21,-.15,.04,-.22,-.34,-.32,.21,-.17,-.05,-.38,-.32,-.43,-.31,-.24,-.01,.11,.01,-.31,-.31,.17,-.4,-.03,-.31,-.35,.46,-.23,.14,.18,-.19,-.43,-.38,-.09,-.05,.16,.23,.21,.03,.04,-.43,-.25,-.38,.25,.19,-.34,.01,-.04,.36,-.07,.01,.16,-.11,-.38,-.21,.17,.05,-.15,-.41,0,-.02,-.29,-.02,.23,-.44,-.22,-.45,-.28,0,-.15,-.1,-.2,.03,-.15,-.49,-.34,.14,-.01,.31,0,-.35,-.12,-.17,.07,.13,-.26,-.37,-.35,.01,-.08,.03,.09,-.12,-.01,-.11,-.09,-.04,.09,-.2,-.37,-.04,-.08,-.28,-.39,-.09,-.43,.12,-.25,-.4,-.38,.1,-.05,-.33,.19,-.07,.06,-.05,-.33,-.26,-.3,-.09,-.28,.26,.15,-.44,-.33,-.19,.22,-.03,-.4,0,0,-.11,-.16,-.05,-.05,-.2,-.16,.07,-.06,-.28,-.05,-.03,-.37,-.1,-.21,-.38,.05,-.36,-.23,-.04,.02,-.27,-.03,-.05,-.36,.07,-.28,-.05,-.05,0,.15,.16,-.41,.12,.18,.11,-.4,-.33,-.35,-.32,-.17,.04,.04,-.03,-.13,-.19,-.07,-.22,-.39,-.13,.12,-.28,-.31,-.09,.13,.14,.01,-.47,-.11,-.37,-.43,-.2,.08,.07,-.42,.04,-.12,.09,-.28,-.16,-.21,.02,-.23,.02,-.49,-.33,-.12,.03,.11,-.05,.08,.02,-.43,.11,-.09,-.27,-.02,1,-.41,-.34,-.15,.22,-.22,-.33,0,.05,-.37,.02,.06,-.32,.22,-.23,-.28,.16,.09,-.19,-.28,-.1,-.15,-.36,-.07,-.15,.04,.25,-.41,-.27,-.13,-.46,-.02,.08,-.38,-.28,-.37,-.42,-.12,-.44,-.45,-.43,-.08,.13,-.11,-.18,-.01,-.18,.1,-.34,-.39,-.14,.12,-.22,-.14,-.33,-.22,-.03,.16,-.4,-.32,-.04,-.1,-.34,-.22,-.32,.12,-.31,-.37,-.31,-.31,-.1,-.36,-.15,.21,-.4,-.35,0,0,-.4,-.3,-.42,-.19,-.35,.03,-.36,-.45,-.27,.11,.2,-.21,-.23,.03,-.29,-.19,-.24,-.35,.05,-.14,-.03,-.3,-.38,-.4,-.04,.23,-.45,-.24,-.22,-.31,.08,-.05,-.28,-.28,-.19,-.27,-.34,-.4,-.31,-.4,.13,-.28,-.1,-.2,.07,-.31,-.07,-.07,-.4,-.19,-.25,-.09,-.39,.02,-.19,-.43,-.32,-.29,-.32,-.22,.24,-.1,-.19,-.2,-.22,.06,.16,-.17,-.41,-.3,.3,-.38,.23,.12,-.35,-.26,-.19,-.02,-.16,-.33,-.34,-.45,-.34,-.07,-.36,-.38,-.44,-.43,.17,-.23,-.15,.18,-.31,.1,-.49,.02,-.37,-.38,-.14,-.39,.04,-.26,-.18,-.25,.02,-.17,-.07,-.15,-.03,-.2,-.1,.07,.04,-.35,-.45,-.34,-.04,-.28,-.29,-.4,-.38,-.21,-.31,.05,.11,.31,-.15,-.17,.27,.04,-.14,-.15,-.27,-.37,-.41,-.25,.29,-.33,-.32,.03,-.22,.05,-.36,-.48,-.28,.17,-.11,-.16,.09,.04,-.18,-.44,-.26,-.46,-.09,-.26,-.31,-.31,-.11,-.11,.07,-.06,-.5,.12,-.34,-.17,-.36,-.31,-.08,-.44,-.54,-.43,.19,-.23,.04,-.05,.39,.13,.01,.38,.25,.19,-.11,-.08,.04,-.01,-.38,-.39,.04,-.32,-.34,.19,-.34,-.05,.24,.34,-.07,-.4,-.34,-.3,-.11,-.11,-.31,-.16,-.23,-.38,-.02,.04,-.46,-.43,-.16,-.39,-.33,-.17,.07,-.43,-.28,-.4,.16,.1,.18,.08,-.3,-.2,-.25,-.03,-.3,-.43,-.23,-.41,-.37,-.32,-.38,.05,-.37,.06,.09,-.52,.08,0,-.05,-.31,-.45,-.4,-.13,.13,-.22,-.1,-.41,-.16,.05,.08,-.01,-.11,-.17,-.46,.12,-.36,-.12,-.29,.17,-.19,-.12,.02,.19,.01,.19,.22,-.35,-.16,.12,-.15,.08,.15,-.19,-.09,.07,-.13,-.12,-.34,.19,-.06,-.44,-.24,-.33,-.1,-.35,.27,-.24,.04,-.41,-.26,-.2,-.19,-.04,-.18,-.03,-.14,-.21,.35,.24,.08,-.33,-.43,-.29,-.4,.09,.11,-.24,-.19,.18,-.16,.09,-.13,-.28,-.32,-.04,-.34,-.28,.09,.07,-.02,-.4,-.36,.13,.08,-.28,-.46,-.3,-.2,.37,-.21,-.22,.02,-.09,-.33,.04,-.17,-.26,-.03,-.07,-.35,-.05,-.19,.15,-.4,.15,-.43,.14,-.23,.07,.03,-.37,-.13,.02,-.03,.11,-.01,-.4,-.31,-.47,-.04,-.42,-.34,-.32,-.17,-.26,.17,-.03,-.22,-.22,.16,-.37,-.28,.03,-.08,-.36,-.26,.08,-.21,-.04,-.34,-.39,.14,-.13,-.17,.06,.35,.03,.2,-.17,-.28,-.39,-.06,-.36,-.35,-.25,-.18,-.41,-.16,-.25,.03,-.28,-.28,-.36,.13,-.08,.25,-.12,-.25,-.16,-.39,.01,-.32,.11,.05,-.32,.24,-.29,-.34,-.3,-.11,-.32,-.33,-.33,-.1,-.05,-.15,-.45,-.23,-.5,-.4,-.29,-.4,.03,-.4,-.21,.05,-.01,-.37,-.3,-.28,-.35,-.28,-.05,-.33,-.4,.04,.35,-.36,-.14,-.37,.1,.14,-.34,-.1,-.3,-.4,.09,-.2,-.01,-.04,-.36,-.03,-.23,-.33,-.27,.4,.26,-.19,-.13,.21,-.05,-.18,-.16,-.07,-.33,-.12,-.18,-.44];export{a as rvalData};
