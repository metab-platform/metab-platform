const a=[.55,-.27,-.44,-.01,-.43,.34,.02,.36,.06,-.14,-.33,.24,-.09,.41,-.41,-.01,-.18,-.14,.06,.29,-.02,-.1,-.05,-.4,-.27,-.3,-.06,.15,-.1,-.16,.02,.05,-.36,.15,-.09,.03,-.39,-.31,-.04,-.24,-.01,-.34,-.16,.04,-.2,-.21,-.13,.29,-.22,.23,0,.29,-.23,-.38,.16,-.24,-.08,.35,-.29,-.34,.17,-.29,-.26,.08,-.19,-.23,-.28,-.41,.2,-.06,.02,-.23,.16,-.13,-.39,.02,-.1,.2,-.35,-.1,.3,-.25,.05,-.27,.3,-.15,-.28,-.21,.35,-.38,.21,.02,.23,.39,.06,.07,.34,.06,.23,.2,-.08,-.26,.14,-.04,.03,-.07,-.02,-.08,-.26,-.14,.17,.19,.24,.31,.15,-.35,-.07,-.16,.21,-.2,-.16,-.07,.01,0,.05,-.02,-.34,.16,-.21,-.46,.39,.36,.06,.27,-.29,.11,.28,-.16,-.13,.21,-.3,.2,-.16,-.27,.34,.1,-.02,.24,-.17,.01,-.26,.2,.06,.2,.38,.21,-.22,.23,.07,-.37,.22,-.16,-.2,.18,.17,.16,-.15,-.12,.32,-.31,.38,-.2,.33,.23,-.24,-.21,-.03,-.24,.26,-.32,-.1,.2,-.05,-.49,-.07,-.02,-.02,.16,.11,.25,.32,.25,-.1,-.01,-.19,-.37,-.17,-.03,.04,.11,-.15,-.04,-.43,-.09,.43,-.06,-.04,.16,.25,-.04,.31,-.35,.19,-.4,.32,.1,.05,.21,-.19,-.07,-.1,.12,-.11,-.34,-.15,-.46,.36,-.13,.23,.07,.08,-.08,-.27,-.38,-.4,.32,-.41,-.2,.22,.12,.2,-.42,.4,.43,.19,.22,-.04,-.1,-.19,.09,.26,.03,.16,.01,-.35,-.05,-.19,-.07,.18,-.49,-.09,.21,-.01,-.32,.2,.09,.03,-.27,-.13,-.06,.13,.33,-.41,-.36,-.32,-.11,-.26,.19,-.35,-.23,.24,-.12,-.27,.23,.15,-.21,-.14,-.36,.32,-.02,.17,.07,-.29,.24,.29,-.18,-.14,.35,.08,-.06,.24,-.48,-.07,-.01,.2,-.21,-.02,-.01,.21,-.2,-.27,-.2,0,.3,-.07,-.03,.11,.22,-.34,-.1,-.24,.24,-.4,-.32,.23,.15,-.27,-.04,.07,.11,.18,-.17,.03,-.34,-.05,-.1,-.29,-.06,.08,.06,.16,-.25,.07,.09,-.45,-.4,-.07,.19,-.17,.22,-.19,.51,.16,.17,.28,-.26,-.12,-.08,-.29,-.49,-.1,-.27,.17,-.11,.17,.35,.25,-.44,.11,-.33,-.29,.03,.01,.37,.09,.32,-.27,-.26,.02,.13,.03,.02,.16,-.17,.03,-.01,0,-.04,-.26,-.31,-.31,-.23,.12,-.05,-.06,-.47,.08,-.15,-.05,.03,.17,.22,-.36,.02,.01,-.19,-.34,-.3,-.19,-.19,-.37,.2,.16,-.32,.28,.13,-.31,-.38,.26,-.01,.27,-.48,-.08,-.15,-.1,-.46,-.43,-.12,.02,.46,.32,.38,-.15,.13,.28,-.42,.06,-.34,-.4,-.08,-.19,-.24,-.18,.24,.06,.1,-.47,-.29,.22,.16,-.03,.01,.35,.08,-.02,-.02,-.15,-.39,.34,-.29,-.41,-.17,.35,.21,-.06,.03,.08,.13,.23,-.36,-.12,-.41,-.12,-.01,.21,-.26,-.2,.12,-.38,-.03,-.11,-.44,-.34,.14,.05,.08,-.02,.32,-.26,-.4,-.01,.25,.1,.24,-.33,-.4,.19,-.19,-.31,.47,.18,0,-.24,-.28,-.22,.07,.2,-.21,-.38,.1,-.26,.22,-.27,.11,.06,-.15,.23,.33,.25,-.3,0,-.4,.13,.04,.01,.36,.05,-.02,.01,-.07,.27,.2,.02,.34,.39,.32,.09,-.07,.22,.14,-.06,.11,-.17,-.19,.02,.3,.31,-.23,-.22,.06,-.15,-.43,-.38,-.36,-.17,-.16,.12,.29,.17,.21,-.34,-.08,.06,.27,-.02,-.06,.01,-.18,.19,-.04,-.29,-.41,-.08,.22,-.35,-.44,-.03,.09,.01,-.09,0,.18,-.24,.05,.08,-.42,-.47,-.12,-.06,-.43,.01,-.03,-.09,-.31,.26,.41,-.32,-.49,.16,.11,-.33,-.39,-.44,.35,-.35,-.19,.29,.16,.06,.09,-.23,-.38,0,.27,-.03,.19,-.48,.29,-.2,.25,.28,.2,.19,.04,.19,.27,-.07,.07,-.24,.26,-.02,.12,-.02,.14,-.04,.12,-.25,.4,.26,-.09,.05,-.26,.14,.19,-.18,-.27,.26,-.26,-.19,.07,.08,.36,.25,-.4,-.29,.19,-.36,-.06,-.09,-.06,-.44,-.21,-.37,.19,-.15,.22,-.1,.08,-.13,-.32,-.08,.08,-.03,-.16,.19,.4,-.19,-.41,.21,-.04,-.15,.21,-.23,-.21,.33,.22,.31,-.28,-.26,.33,.11,.19,.21,-.11,.31,.19,0,-.06,-.19,.37,-.27,.19,.12,-.48,.02,-.3,.1,-.29,.17,-.17,-.31,.39,.1,.18,.24,-.07,.1,0,-.05,-.02,.28,-.21,-.37,.06,-.34,-.5,.14,-.08,.29,-.33,.24,.25,-.35,-.2,.07,.28,-.44,.08,.09,0,-.23,-.2,.02,-.22,.03,.34,-.06,-.42,.29,-.02,.31,-.1,.24,.21,-.33,-.02,0,-.37,-.14,.07,-.19,-.16,-.31,-.09,-.39,-.42,-.2,-.11,-.16,.26,.3,.25,-.35,.31,.18,.31,.1,.3,-.36,.14,-.45,0,.2,-.25,-.39,-.19,.07,.22,-.08,-.09,-.06,.31,-.16,-.37,-.35,-.13,-.44,-.17,.22,0,.06,.04,-.01,-.29,-.25,-.08,.03,0,.13,-.12,.11,.03,-.31,0,-.15,.28,.14,-.22,-.13,-.42,.06,.19,.25,-.44,-.06,-.44,-.04,.14,-.04,.08,.01,-.46,.21,.34,.03,.18,-.24,.01,.13,-.14,-.04,-.28,-.16,.41,-.13,-.37,-.14,-.06,.06,.01,.01,-.18,.05,.07,.01,-.09,.21,.15,.26,.07,-.03,-.36,.04,.1,.26,.21,.07,.23,.27,.38,.35,.03,-.02,.19,.28,.16,-.05,.18,.15,.3,-.18,-.17,-.09,-.31,-.51,.03,.22,-.08,-.32,.27,-.33,.17,.06,.07,-.26,-.33,.23,-.15,-.22,-.39,-.02,.1,-.1,-.23,.34,-.24,.25,.28,.13,.36,.31,-.21,-.14,.19,-.23,.02,.14,.37,.4,-.14,.35,-.03,.16,-.26,-.37,-.4,.39,-.43,-.35,.15,.27,-.38,-.32,-.36,-.25,.28,.17,.06,.05,-.34,.02,-.01,.19,-.23,.11,.17,.3,-.34,.11,-.12,.35,.06,.13,.01,.32,-.12,-.34,.06,-.33,.08,-.27,-.03,.27,.05,-.2,-.04,.29,.13,.14,.1,-.34,.33,-.41,.44,-.26,-.08,.03,.12,.22,-.22,-.37,.35,-.05,.25,.15,.25,.42,.18,.25,.11,-.05,.33,.28,.22,-.01,.21,-.17,0,-.17,-.07,.22,-.14,-.04,.2,.08,-.23,.2,-.09,.03,.17,.03,.05,.22,-.22,.27,.17,.03,1,.26,-.12,-.3,.15,-.17,.13,-.15,.11,-.25,-.11,.24,-.15,.23,-.06,.1,.12,-.1,.16,-.42,.2,-.16,-.06,.21,-.44,-.2,-.06,.23,.19,.1,.22,.09,-.13,.27,-.17,.07,.16,-.29,.17,.16,.31,.28,-.32,-.13,.26,-.07,-.37,.14,.14,-.15,-.05,-.36,-.09,.15,.26,.16,-.44,-.04,-.09,-.46,.41,-.08,-.38,.31,-.04,-.07,-.13,.25,-.23,-.06,.01,-.12,-.2,-.1,.16,-.33,-.02,-.37,-.21,.25,.1,-.31,-.27,.37,-.14,.54,-.08,-.47,.07,-.32,-.12,-.15,.15,-.23,.13,.11,-.09,-.09,-.17,.29,-.32,.16,-.4,.18,-.44,.18,-.07,.08,.14,.05,-.41,.24,.08,.3,-.27,-.42,-.07,.07,-.43,-.28,.22,.33,.22,-.39,0,-.07,-.12,-.25,.36,-.39,-.28,-.33,.04,.01,.15,.29,-.41,-.1,.16,.32,.21,.17,.26,-.18,-.27,.32,.12,-.28,-.22,-.35,-.31,-.29,.1,.14,.01,.23,.09,-.01,-.22,-.49,-.04,-.18,-.01,.4,.03,.08,.21,.12,.19,-.41,-.48,-.07,-.37,.05,.22,.36,-.11,-.36,.18,.18,-.36,-.27,.13,0,.08,.19,-.33,.15,-.24,.39,-.37,-.31,.32,-.37,.02,-.09,.33,-.24,.2,.24,-.27,-.27,.24,.27,-.23,-.12,.35,.35,.23,.13,-.15,.09,.19,-.27,.23,-.3,-.1,-.45,-.16,-.32,-.02,.22,.32,-.43,-.35,-.38,.08,.34,.23,.05,-.16,-.18,.26,-.29,.09,.34,.27,.07,.2,-.03,-.07,.44,-.27,.41,-.44,.22,.34,-.22,.09,-.14,-.18,.15,.27,-.41,-.07,-.19,-.16,-.12,.3,-.23,.36,.43,-.17,-.12,.32,-.17,.31,.08,.32,-.46,-.15,-.05,.12,.03,-.2,-.27,.02,.22,.21,.03,-.31,-.19,-.15,-.33,-.02,.21,-.25,-.02,-.5,.22,.21,-.43,-.01,0,-.44,.43,-.04,.12,.14,.07,-.13,-.39,.21,.12,.18,-.16,.17,.22,.12,-.44,-.31,-.22,-.06,-.02,-.27,.38,-.03,.05,-.07,.41,.11,.02,-.09,.05,-.14,.17,-.36,-.07,-.05,-.13,-.06,.05,.12,.17,.17,-.14,-.06,-.14,.14,.17,.11,.14,.33,-.08,-.16,-.16,.2,.39,.23,-.12,.14,.11,.15,.25,.1,.07,-.39,.03,.1,.27,.26,-.04,.27,-.17,.24,.26,-.09,.17,-.14,-.26,-.12,.07,-.19,.22,-.09,.21,.04,-.42,-.19,.46,.22,-.42,-.02,.23,.07,-.32,-.38,-.07,-.43,.08,.09,-.12,.4,-.23,-.33,.33,.15,.25,-.43,.07,-.2,.1,-.14,-.26,.24,-.09,.07,.08,-.08,-.27,-.01,-.13,-.36,.07,.03,-.27,.1,-.31,-.28,.29,.32,.13,-.24,.03,-.37,.33,-.33,.28,.37,-.08,-.05,.13,-.11,.33,.27,-.08,-.2,-.38,-.23,-.21,.21,.03,-.03,-.05,-.1,-.08,-.09,.16,-.2,-.13,.08,-.14,.02,.25,.11,.3,-.21,-.28,.18,-.15,-.09,.15,-.04,.14,-.16,-.09,-.18,.38,-.13,.13,.16,.06,.13,.36,-.33,.05,.09,.04,-.09,-.06,.01,-.17,-.2,.13,.08,-.42,.18,.26,.03,-.39,-.01,.06,-.03,-.19,-.19,-.12,.11,-.1,-.17,-.33,.11,-.01,-.26,.19,.15,-.02,.03,-.11,-.22,-.34,.29,-.04,-.2,.24,-.19,.15,-.09,-.17,0,.12,-.27,-.06,-.42,-.31,.3,-.37,-.21,-.21,-.1,.09,.29,-.15,-.24,-.22,.05,-.22,-.27,.2,.15,-.24,-.33,-.2,-.19,-.12,-.04,-.32,-.07,.06,.38,-.22,.09,-.43,-.02,-.26,-.37,-.16,-.28,.33,-.25,.26,-.16,-.02,-.43,.29,-.03,-.25,-.3,-.1,.19,.14,-.3,-.37,-.38,-.28,-.01,-.02,.22,-.04,.32,-.44,.22,-.05,-.28,-.1,-.15,-.2,.13,-.4,-.38,.08,-.01,-.45,.13,-.01,-.3,0,.05,-.08,.04,.19,-.2,.14,-.23,-.11,-.29,.03,.14,-.01,.12,-.08,.05,-.07,-.1,-.45,.02,.02,-.08,.05,-.08,.09,-.29,-.12,-.17,-.13,-.27,.22,.2,.3,.22,.16,-.1,.08,-.21,-.17,-.23,.16,-.29,.24,-.1,.07,.3,-.13,.24,-.14,-.46,-.46,-.23,-.24,.32,-.36,.06,-.06,.08,.2,.01,-.25,.42,-.18,-.1,-.22,-.05,-.35,-.13,-.05,-.33,-.12,.21,-.16,.11,.02,-.22,.18,.28,-.29,.18,.11,.01,.09,-.26,-.43,-.33,.29,-.2,-.39,-.28,-.24,-.23,-.45,-.16,.11,.19,-.22,.1,-.01,-.01,.17,.09,.1,-.44,-.38,-.45,.09,-.38,-.13,-.2,-.02,-.15,-.31,-.21,.04,.27,-.2,-.11,.04,.16,.16,-.36,-.18,-.13,.25,.11,.08,-.31,.37,.08,.08,-.24,-.34,.12,-.35,-.2,-.26,-.3,.01,-.21,-.24,-.3,-.18,-.34,.06,-.19,.43,-.11,.25,.13,-.05,.29,-.17,.12,.13,-.03,-.11,-.21,-.01,-.37,-.48,.29,-.33,.29,-.15,.05,-.06,-.33,-.47,-.39,-.2,-.14,-.02,-.24,-.03,-.04,-.1,.07,-.31,-.41,-.06,.07,.07,-.14,-.06,-.25,-.29,-.31,.21,-.2,-.12,.01,-.34,.03,.13,.1,-.04,-.44,-.19,-.4,-.48,-.43,-.24,.11,-.22,-.03,-.12,-.27,.2,-.05,.26,-.24,-.42,-.16,.05,.04,-.33,.19,-.41,-.17,.07,-.02,-.01,.3,.33,-.36,.35,.06,.31,-.33,-.01,-.23,.21,.18,-.1,-.28,.14,-.03,-.42,-.04,.21,-.03,.06,-.06,-.26,.29,.26,.23,-.13,-.17,0,.27,-.15,.04,-.01,.27,-.44,0,-.3,-.14,-.43,.16,.04,.13,.2,-.06,.09,.04,.02,.29,-.1,.3,-.18,-.23,-.34,-.08,.01,-.34,-.19,.13,-.02,.27,.01,-.01,-.3,-.44,-.14,.03,-.28,-.28,.1,-.07,-.36,-.38,-.13,.26,.12,.06,-.06,-.23,.1,-.24,-.22,.05,.08,-.39,.04,-.09,-.3,.26,-.1,-.14,-.13,.06,-.11,-.29,.14,-.44,.23,-.13,.38,-.13,-.43,-.07,.4,.08,.13,.07,-.42,-.4,-.41,-.09,-.35,-.45,-.38,-.27,-.31,-.05,.09,0,-.35,.15,-.19,.08,-.06,.06,-.41,-.27,.32,-.32,.03,-.03,-.42,-.14,.16,.15,-.09,.01,.28,-.08,-.15,-.18,-.49,-.24,-.39,.15,-.28,.07,-.21,-.37,.09,.01,-.25,-.19,-.39,.35,.02,.22,.06,-.38,-.04,-.37,.05,-.38,.26,-.02,-.13,.33,-.34,-.34,-.41,.06,-.2,-.13,-.25,-.24,.25,-.12,-.41,-.26,-.2,-.43,-.36,-.43,-.04,-.44,-.21,.04,-.11,-.39,-.36,-.39,-.38,-.42,.29,-.2,-.47,.08,.16,-.41,.33,-.42,.37,-.05,-.22,-.06,-.42,-.26,-.25,-.12,-.25,.38,-.42,.19,-.23,-.11,-.25,.11,-.16,-.02,-.1,-.17,.07,-.13,-.11,-.01,-.41,.32,-.07,.03];export{a as rvalData};
