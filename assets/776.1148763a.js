const a=[.61,-.18,-.33,.17,-.35,.38,-.01,.02,-.18,-.14,-.2,.31,-.28,.31,-.21,.22,.14,-.07,-.12,.34,-.05,.27,-.01,-.04,-.19,-.36,.28,-.07,-.22,.19,-.15,.3,-.4,.23,.15,-.01,-.27,-.11,-.12,-.37,-.13,-.34,-.15,.35,-.26,-.09,.07,.48,.06,-.31,0,.35,-.1,-.31,-.2,-.11,-.11,.26,-.2,-.37,-.13,-.36,-.36,.1,-.07,.2,-.32,-.15,.24,.04,0,-.21,-.16,.13,-.28,.11,.22,-.09,-.11,.25,.37,-.24,.11,-.31,.24,.07,-.31,-.13,.33,-.24,.01,-.19,-.17,.27,.33,-.21,.36,.45,.22,-.08,-.03,-.28,-.15,-.06,-.31,-.24,-.05,-.1,-.33,-.43,.27,-.31,-.01,.42,.26,-.27,.15,.22,.24,-.17,-.31,.18,.13,.06,-.19,-.34,-.25,.41,.18,-.37,-.04,.15,.08,-.2,.05,.34,-.16,-.39,.24,.35,-.37,.27,-.33,-.27,.37,.13,.04,.18,-.26,.1,-.26,.04,-.01,.22,-.02,.05,-.07,.49,.27,-.17,-.17,-.33,-.38,-.18,-.1,-.15,-.26,.28,.11,-.34,.48,.24,-.06,-.05,-.46,.16,.09,.1,-.19,-.34,.09,.17,-.14,-.37,-.45,-.17,.25,.16,-.16,.37,.27,.01,-.35,-.19,-.38,-.33,-.34,.17,.26,.22,0,-.25,-.35,.23,.23,-.22,-.23,-.24,-.23,-.33,-.08,-.15,.36,-.23,.25,-.19,-.1,-.12,.15,-.04,-.32,-.31,-.06,-.25,-.4,-.38,-.07,.2,.11,-.21,.01,-.1,-.15,-.34,-.49,.38,-.1,-.02,-.08,-.05,-.21,-.16,-.04,-.07,-.13,.04,.02,-.11,-.01,.07,-.1,-.05,-.25,-.16,-.36,-.32,-.44,-.04,-.15,-.29,-.07,.04,-.09,-.37,.18,-.29,.26,-.3,-.08,-.01,.34,.54,-.28,-.31,-.33,-.2,.09,-.08,-.31,.07,-.24,-.02,-.05,.13,-.21,-.44,-.04,-.24,.13,.15,-.05,-.38,-.41,.06,-.07,-.17,-.07,.46,0,-.28,.12,-.36,.28,.07,.19,-.4,-.09,-.29,.03,-.14,-.29,-.18,-.01,.37,-.03,-.27,-.09,-.05,-.3,-.43,-.35,.2,-.07,-.38,-.19,-.22,-.37,.05,-.14,-.27,.16,-.28,-.16,-.35,.18,.11,.19,-.23,-.04,.12,-.23,-.21,.16,.2,-.33,-.36,-.22,-.14,-.29,-.29,-.4,.08,.26,-.19,.31,-.1,-.29,.08,-.27,-.32,-.03,-.21,-.24,-.13,.09,.41,.18,-.39,0,-.24,.05,.09,-.11,.15,-.05,.04,-.19,-.33,.01,-.03,0,.01,-.09,-.11,.15,-.24,.14,.06,-.43,-.43,-.32,-.37,-.1,-.3,-.26,-.34,.37,.01,.05,-.3,.17,.01,-.3,-.2,-.31,-.09,-.09,-.35,-.34,-.28,-.31,.14,.01,-.31,.2,.18,-.37,-.25,-.2,-.08,.3,-.51,.2,-.36,.05,-.36,-.45,-.28,-.22,0,-.11,.18,-.12,.19,-.09,-.28,.09,-.43,-.36,-.14,-.31,-.25,-.33,.38,-.21,-.05,-.37,-.5,.23,.44,-.13,-.25,.41,-.1,-.1,-.05,.12,-.3,.16,-.34,-.28,-.38,.43,-.11,-.2,.07,.06,.01,.52,-.26,-.13,-.32,.06,.34,-.13,-.35,-.31,.04,-.31,.12,-.42,-.21,-.32,-.1,-.2,-.19,-.24,.03,-.25,-.26,.06,.31,.06,-.09,-.29,-.36,-.14,-.02,-.25,.01,-.19,.01,-.32,-.22,-.29,-.05,.2,-.3,-.43,-.12,-.34,-.01,-.38,-.17,-.19,.06,.14,-.1,-.07,-.23,.19,-.34,-.09,.05,-.08,.47,-.2,-.1,-.12,-.29,-.19,-.13,-.05,-.13,.46,.36,-.03,-.29,.11,.15,-.03,-.09,-.27,.01,.18,.26,-.01,.01,-.27,-.1,-.06,-.37,-.38,-.26,-.3,-.21,.24,-.1,.07,.09,-.31,.19,-.22,-.04,.04,-.04,-.16,-.05,.01,-.17,-.38,-.26,.07,.02,-.32,-.33,.04,.08,-.35,-.12,.26,.32,-.39,-.09,-.27,-.16,-.39,-.24,.19,-.28,.02,.02,-.19,-.31,-.15,.54,-.42,-.32,.08,-.15,-.2,-.27,-.29,.21,-.32,.17,-.09,.32,.16,0,-.2,-.22,-.14,.03,-.17,.13,-.38,.08,.07,.4,-.05,-.01,-.1,.05,-.15,.47,-.12,-.05,-.34,.03,-.03,.07,-.04,-.14,-.22,-.14,-.33,-.1,0,.16,-.05,-.3,.3,.04,.15,-.31,.08,-.35,-.42,-.29,.45,.52,-.21,-.35,-.35,.12,-.05,-.02,-.17,.05,-.34,-.24,-.34,.08,-.04,.3,.02,-.13,-.21,-.25,-.24,.19,.03,.17,-.09,-.03,-.38,-.29,.37,-.18,.01,.12,-.31,-.35,.15,.21,.35,-.37,-.36,.13,.08,.11,.09,-.24,.31,.15,.07,.17,-.22,.46,-.34,-.09,-.16,-.46,.13,-.1,.29,-.11,.27,.21,-.34,-.14,-.1,-.15,-.08,.15,-.03,.06,.15,-.01,0,-.34,-.24,-.22,-.36,-.41,.08,.23,.58,-.25,.53,-.11,-.42,-.08,-.26,-.2,-.31,.12,-.09,-.18,-.15,-.2,.24,.07,-.09,.5,-.14,-.31,0,-.21,.5,-.02,.21,-.03,-.23,-.2,-.12,.09,-.16,.07,-.09,.18,-.33,-.02,-.08,-.2,-.39,-.17,.01,.31,.07,-.02,-.37,.41,-.11,1,-.12,.01,-.33,-.06,-.42,.07,.26,-.36,-.31,-.35,-.42,-.08,-.01,.06,.29,0,-.27,-.1,-.41,.26,-.35,-.32,.1,-.32,-.12,.12,-.11,-.31,-.06,-.35,-.03,.13,.03,.06,.01,.14,-.43,.26,-.38,-.19,.12,.04,0,-.35,.34,.2,-.07,-.52,-.21,-.35,.16,.12,.05,.06,-.12,-.37,.1,.11,-.16,.15,.15,-.26,.27,.16,-.22,-.28,-.37,-.15,.25,-.29,-.11,.2,-.33,.08,.14,.26,-.19,-.04,.04,-.24,.12,-.08,-.07,.23,-.2,-.32,-.07,.16,.21,.01,.2,.43,-.15,-.04,.14,.17,.05,-.1,.05,.01,-.16,-.05,.04,.39,.16,-.2,-.26,-.39,-.42,-.03,.02,-.17,-.37,.01,-.43,-.03,.09,-.16,-.28,-.34,.26,-.13,-.17,-.34,-.16,.25,-.08,-.06,.41,-.31,.38,-.23,.32,-.18,.37,.08,.14,-.14,-.27,-.24,.28,-.12,-.1,-.15,.14,-.1,.01,-.04,-.4,-.33,.44,-.37,-.32,.02,0,-.3,-.34,-.36,-.29,.22,-.17,-.01,.09,-.32,.49,-.06,-.01,-.3,-.21,-.09,-.04,-.29,-.09,-.02,-.07,-.07,-.11,-.04,-.19,-.03,-.37,-.04,-.37,-.05,-.35,-.07,.01,0,-.3,0,.04,-.05,.23,0,-.34,.4,-.07,.33,-.32,.05,-.07,-.19,-.22,-.33,-.36,-.11,.19,-.13,-.18,-.17,.01,.37,.46,.08,-.38,-.02,-.21,-.02,.06,-.13,-.08,.15,-.05,-.17,.13,-.12,.07,.12,.05,.18,.47,.05,-.08,.47,.1,-.1,-.07,-.07,.17,.04,-.11,.31,.17,.17,-.29,-.17,-.22,-.27,-.1,-.2,-.42,-.11,.3,-.19,-.21,-.17,.04,-.21,-.05,-.17,-.32,-.01,-.16,-.14,-.21,-.35,-.01,-.05,.22,-.11,.19,.03,.16,-.19,-.06,-.22,-.01,-.15,-.37,.21,.17,.08,.07,-.41,-.08,.45,-.3,-.25,-.11,-.05,.29,-.08,-.22,-.1,-.26,.09,.1,-.38,.04,-.37,-.28,-.1,-.15,-.32,.36,.12,0,-.06,-.05,-.03,-.02,-.12,.19,-.26,-.17,.05,-.32,.11,-.23,-.34,-.09,-.18,-.41,-.41,.18,.08,.07,-.02,-.46,-.06,-.33,-.11,-.28,.08,-.34,-.27,-.25,-.07,.07,-.06,.19,-.21,-.09,-.45,.23,-.17,.55,.12,.05,.19,.11,-.09,.09,.21,-.07,-.34,-.34,-.13,.24,-.31,-.38,-.05,.42,.21,-.4,.34,-.19,-.02,-.32,.4,-.33,-.16,-.25,-.02,-.02,.46,.07,-.42,-.14,-.15,.37,.02,.33,.4,-.12,-.26,.34,-.22,-.43,-.33,-.32,-.36,-.32,-.25,-.2,.28,.37,-.32,-.31,-.17,-.34,.02,-.24,.02,-.07,-.1,.11,-.04,-.07,.36,-.37,-.35,-.01,-.32,-.04,0,.24,-.17,-.41,.43,.18,-.34,-.37,.29,.22,-.03,.43,-.39,-.2,-.38,.1,-.23,-.21,-.08,-.33,.37,-.23,-.02,-.21,-.11,.4,-.36,-.17,0,.11,-.25,-.1,.41,.4,.08,.02,.06,.07,.12,.15,.1,-.47,-.07,-.32,-.19,-.26,.09,.37,.37,-.29,-.37,-.39,.1,.39,.22,.51,-.2,-.42,.37,-.4,.12,.22,.07,.32,.24,-.27,.03,.08,-.36,.57,-.39,.23,-.07,-.25,.1,.18,.19,-.11,.5,-.33,.13,-.32,.14,-.17,.01,-.34,.51,-.03,-.09,-.33,.41,-.14,-.01,.08,.37,-.38,.04,.12,.42,0,-.17,-.42,-.16,0,-.19,-.03,-.32,-.25,-.3,-.39,-.12,.16,-.31,.04,-.24,-.07,-.04,-.39,.13,-.26,-.38,.38,-.27,-.23,-.14,-.1,-.24,-.31,.31,-.15,-.08,-.09,-.03,-.03,-.29,-.29,-.39,-.27,.08,.07,-.34,-.09,-.23,-.01,.09,.04,.16,.03,-.33,-.08,-.33,.33,-.1,-.08,-.22,-.05,-.29,.31,.22,-.24,-.19,-.18,-.23,-.51,-.21,-.22,-.25,-.06,-.16,-.18,-.24,-.43,.01,.03,-.05,-.26,-.21,.05,.25,.25,-.02,-.18,-.13,-.39,.02,.04,-.03,-.16,.07,.09,0,-.05,-.05,-.14,-.09,-.49,.03,-.28,-.3,.02,-.26,-.05,-.27,-.33,.09,-.02,.33,-.37,-.01,-.25,.09,.05,-.29,-.18,-.15,.05,-.28,.21,.31,-.45,-.35,.24,-.04,.06,-.27,.04,.11,-.04,.1,-.12,.29,.05,-.16,.18,.07,-.4,-.01,.08,-.32,.08,-.13,-.36,-.13,-.32,-.27,.24,.55,-.15,-.29,-.18,-.21,-.06,-.29,.36,-.05,.04,.16,.07,-.24,.45,-.07,.03,-.18,-.33,-.36,-.45,-.1,.06,-.23,.03,-.14,.23,.24,-.2,-.29,-.17,-.02,-.17,-.14,-.11,.28,.13,.19,-.26,.28,-.37,-.26,-.18,-.08,-.13,-.24,-.01,-.23,-.07,-.24,-.23,.07,-.14,-.13,-.05,-.21,-.23,-.14,.02,-.2,.16,-.06,0,-.06,-.11,-.11,-.32,-.18,.21,-.36,-.33,-.31,-.09,.06,-.11,-.18,.08,-.3,-.21,-.3,-.36,-.08,-.24,-.19,0,-.06,-.32,.03,-.13,-.07,-.46,.36,-.06,.21,.16,-.28,-.19,-.25,-.3,.08,-.04,-.35,-.28,-.35,-.43,-.08,-.35,-.36,-.43,-.25,-.07,-.08,-.29,.01,-.36,-.04,-.41,-.33,.39,-.03,-.4,-.07,-.45,-.37,.01,.31,-.38,-.21,-.25,-.13,-.36,-.15,-.12,.05,-.38,-.34,-.16,-.39,.43,-.32,-.12,.27,-.31,-.17,-.1,.16,-.33,-.31,-.32,-.12,-.33,-.08,-.37,-.41,-.37,.17,.06,-.24,-.03,-.21,-.27,-.21,.05,-.2,-.18,-.11,-.14,-.15,-.3,-.27,.19,.06,-.25,-.1,-.28,-.31,-.06,-.02,-.28,-.22,-.19,-.4,-.23,-.42,.19,-.37,.07,-.13,.07,-.14,-.02,-.11,.02,-.29,-.27,-.11,-.05,.02,-.28,-.03,-.21,-.32,-.31,-.42,-.3,-.38,.1,.29,.06,-.24,.01,-.07,-.06,-.36,-.34,-.35,.19,-.34,.11,-.14,-.24,.02,-.35,-.09,-.29,-.33,-.35,-.43,-.38,.03,-.26,-.37,-.34,-.27,.24,-.3,-.13,.02,-.39,-.03,-.24,-.19,-.25,-.34,.11,-.42,-.02,-.02,-.14,-.2,.02,-.07,-.11,-.09,-.3,-.22,-.05,.02,.08,-.35,-.38,-.12,-.04,-.36,-.08,-.17,-.26,-.3,-.38,.04,.12,-.02,-.31,-.05,.18,.29,-.15,-.16,-.24,-.37,-.2,-.13,.24,-.2,-.19,.28,-.27,.13,-.3,-.2,-.06,.5,-.15,.18,.19,.03,-.11,-.31,-.32,-.22,-.06,-.2,-.32,-.52,.47,-.11,-.14,-.12,-.37,.16,-.22,-.21,-.26,-.39,-.04,-.35,-.19,-.38,.18,.03,.14,-.23,.21,-.04,-.08,.34,.03,.12,-.22,-.06,.17,.48,-.26,-.39,-.13,-.28,-.37,.22,-.27,.06,.16,.31,.01,-.42,-.36,-.35,-.07,-.06,-.1,-.25,-.23,-.32,-.25,.21,-.34,-.38,-.13,-.18,-.26,-.38,.1,-.32,-.42,-.29,.1,.12,-.12,.06,-.3,-.06,-.23,.31,-.17,-.31,-.28,-.32,-.34,-.36,-.3,.06,-.32,-.1,.07,-.28,-.1,-.07,-.04,-.31,-.28,-.34,-.08,-.15,-.19,-.11,-.34,-.2,.17,.21,-.07,.36,.44,-.16,.13,-.05,.09,-.45,-.15,-.16,.15,-.15,-.13,.14,.14,.3,-.39,.02,-.12,-.13,-.15,-.2,-.34,.1,.07,.39,-.07,-.27,-.27,-.15,-.33,-.18,-.22,-.09,-.31,.13,-.35,.1,-.34,-.1,-.23,-.24,-.02,-.18,-.03,-.09,.1,.08,-.18,.33,-.31,-.35,-.26,-.2,.1,.07,-.31,-.23,-.18,.32,.07,.18,-.37,-.31,-.43,0,-.37,-.12,0,.03,-.32,-.35,.25,-.15,-.15,-.25,-.17,-.18,.1,-.14,-.12,0,.13,-.4,-.11,.03,-.23,-.14,-.31,-.26,-.09,.46,.05,-.28,.53,-.28,.08,-.13,.35,-.08,-.45,-.24,.51,.27,-.02,.08,-.3,-.35,-.29,.2,-.29,-.32,-.35,-.36,-.44,-.37,-.03,-.26,-.39,-.14,.12,0,-.04,.26,-.33,-.27,-.05,-.14,.18,-.01,-.34,-.08,-.25,.42,-.08,.21,.42,0,-.23,-.27,-.34,-.23,-.31,-.25,.17,-.38,-.12,.02,-.02,-.08,-.14,-.37,-.29,-.01,-.01,.37,-.21,-.36,.19,-.29,-.1,-.33,.06,-.24,-.32,.51,-.36,-.36,-.35,.22,-.3,.01,-.33,-.17,-.12,-.25,-.3,-.26,-.12,-.32,-.36,-.22,.24,-.34,.01,-.13,.06,-.32,-.34,-.26,-.34,-.37,-.05,-.3,-.35,-.32,.27,-.35,.43,-.4,.11,-.09,-.31,-.05,-.33,-.27,.16,.01,.11,-.05,-.25,-.23,-.24,-.17,-.39,-.01,.23,.2,.3,-.24,.35,-.4,-.02,-.33,-.41,.41,-.13,-.14];export{a as rvalData};
