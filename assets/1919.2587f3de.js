const a=[-.19,-.21,-.28,-.09,-.33,-.36,-.19,.12,.07,.04,-.16,-.25,.25,.3,-.19,-.07,-.24,-.06,.18,.02,.03,-.02,0,-.17,-.14,-.26,-.06,-.26,-.23,-.11,-.09,-.02,-.31,-.46,-.25,-.1,-.39,-.13,-.13,-.27,-.02,-.32,-.39,-.1,.12,-.09,.07,-.33,-.22,.26,.08,-.36,-.18,-.23,-.1,-.07,.02,-.38,.04,-.31,-.18,-.32,-.2,-.04,-.23,-.13,-.31,-.13,0,.08,.03,-.33,-.03,.03,-.33,-.14,-.14,-.13,.02,-.26,.25,-.42,.31,-.33,-.08,.09,-.23,.1,.32,-.07,-.07,.12,.21,.17,-.17,.14,.23,-.29,-.04,-.18,-.12,-.21,-.15,-.19,-.06,.14,-.03,.11,-.3,-.08,-.05,.05,.11,.02,-.06,-.29,-.14,-.17,-.06,-.1,.32,.13,-.36,.08,.03,.02,-.26,-.02,-.23,-.31,.29,.29,.29,.21,-.38,-.22,.05,.14,-.15,-.25,-.33,-.35,-.22,-.25,-.4,-.02,-.06,-.32,-.13,.08,-.24,.29,-.03,-.19,.23,-.08,-.04,-.5,-.15,-.13,.18,-.13,.13,.15,.18,-.03,-.31,-.16,0,-.26,-.44,-.21,.2,.29,-.09,-.11,-.11,-.1,.01,-.36,-.07,-.22,.12,-.26,-.04,.33,-.24,-.44,.03,-.14,-.1,.12,.13,-.15,-.2,-.28,-.21,-.03,-.2,.03,.09,-.15,-.32,-.15,.09,-.24,.18,.13,-.03,.22,.29,-.26,-.15,-.25,-.4,-.26,.02,.22,-.14,.11,-.02,.04,-.14,-.3,.06,-.31,.24,-.16,-.16,.01,.24,-.1,-.22,-.17,.38,-.43,-.21,.01,.04,-.08,-.02,-.25,.22,.04,.16,.31,.04,-.05,-.23,-.16,.15,.08,-.05,0,-.33,.21,.03,-.01,.01,-.24,.03,.03,.15,-.31,-.15,-.06,-.12,-.26,.06,-.37,-.23,-.05,-.28,-.15,-.12,.18,-.15,-.1,-.21,-.16,.08,.04,0,.32,.12,-.11,.12,-.36,.08,-.07,.32,.21,-.33,.29,.23,-.38,.01,-.05,.07,.17,-.04,-.33,-.02,.62,-.24,.1,.15,-.17,-.08,0,-.35,.01,.3,-.37,-.12,.16,.26,.04,-.19,.13,-.27,-.09,-.14,-.26,.25,.11,-.36,.17,.09,.14,.27,-.05,-.06,.24,-.21,-.07,-.18,-.1,.23,.12,-.04,-.37,.11,-.02,-.29,-.23,.05,-.03,-.29,.07,-.2,.13,-.32,.13,.22,.03,-.03,-.11,-.2,-.24,-.16,.06,.13,.25,-.05,.23,-.35,-.31,-.3,-.04,-.23,.11,.12,-.03,-.22,-.01,-.04,-.21,-.14,-.08,-.31,-.1,-.08,-.01,0,-.02,-.03,-.11,-.2,-.28,-.14,.45,-.21,.37,.41,-.34,-.06,.15,.14,.11,-.04,-.05,-.19,-.01,.08,-.01,-.19,-.18,-.09,-.15,-.1,.26,.04,-.14,-.12,-.25,-.28,-.35,.07,.37,-.32,-.13,-.33,.39,-.03,-.33,-.33,.19,.16,.22,.34,.02,-.12,-.29,.22,-.23,.38,-.3,-.36,-.29,-.22,-.24,-.26,-.17,.11,-.13,-.4,-.23,.03,-.15,.06,0,.24,.03,.1,.05,-.03,-.37,-.18,.12,-.24,-.28,.16,-.12,.1,.06,.2,.11,.01,-.24,.11,-.38,-.5,-.31,.02,-.23,-.16,.24,-.3,.04,-.19,-.24,-.31,.15,.12,.09,.06,.14,-.2,-.15,.09,-.24,.38,.06,-.4,-.33,.32,.3,-.11,.12,.01,.17,-.08,-.19,-.3,-.03,-.38,-.19,-.32,-.15,-.25,-.05,-.29,.07,.11,-.11,-.19,.24,-.04,-.23,-.2,-.34,.03,.24,-.4,-.41,-.16,-.24,-.07,-.29,.23,.3,.12,.21,-.42,-.37,.02,-.13,.07,-.12,.06,.05,.48,-.11,-.27,.02,-.26,-.1,-.11,-.12,.04,-.31,-.3,-.24,-.22,.42,.08,.11,.11,-.06,-.16,-.16,.09,.34,.17,.57,.11,.08,-.09,.06,-.11,-.25,.19,.19,-.31,-.34,.07,.28,.08,-.14,-.31,-.44,-.14,.03,.08,-.33,-.35,-.31,-.21,-.36,.63,.01,.15,-.28,.36,-.02,-.02,-.21,-.37,.08,-.16,-.31,-.29,-.09,-.18,-.05,.06,-.18,-.4,-.11,-.05,-.4,.3,.08,.43,.13,-.34,.31,.1,-.47,.18,0,.01,-.12,.12,-.31,.04,-.11,-.24,.41,.33,.3,.1,.04,.02,-.06,-.26,.16,.14,.1,-.26,-.36,-.1,-.33,.03,-.3,.08,-.27,.26,.08,-.34,.03,.2,-.36,-.25,.03,-.09,.21,.16,.33,-.36,-.32,-.35,-.15,-.06,-.35,.1,.07,-.21,-.31,.04,-.38,.13,-.08,-.08,.16,-.15,-.28,.01,-.28,.14,.01,-.46,-.33,-.1,-.41,.03,-.24,-.26,.24,-.06,.02,-.04,.51,-.32,.43,-.45,-.28,-.05,0,-.32,.23,-.02,-.14,-.12,.09,-.26,-.33,-.27,-.05,-.22,.17,-.05,.23,.16,.03,.18,-.07,.26,-.03,.2,-.23,-.38,.28,-.38,-.24,.15,0,-.31,-.12,-.08,.08,-.26,.06,0,.15,-.35,.1,-.23,.25,-.18,-.19,.03,-.15,.3,-.04,.08,-.31,.18,-.18,-.41,-.01,-.15,-.34,-.25,.13,.18,-.33,-.41,-.1,-.3,-.06,-.23,.15,-.27,-.12,-.19,.51,.08,-.4,.01,-.13,-.3,-.44,.01,-.11,.33,.23,-.41,-.05,-.23,.06,-.16,-.31,-.16,-.15,.03,-.09,-.04,.03,-.05,.04,-.13,-.14,-.31,-.11,-.31,-.24,.12,-.12,.35,-.21,.31,-.25,-.41,.01,.06,-.09,-.12,.09,-.05,-.06,-.29,-.12,-.07,.08,.39,-.16,-.06,-.4,-.43,-.21,.39,-.04,.2,-.36,-.09,-.16,-.08,-.08,.07,-.3,-.16,.05,.12,-.07,.04,.36,-.36,.01,-.36,-.38,.38,.17,-.13,-.22,.09,-.16,.02,-.12,.13,-.23,-.12,.04,-.2,.03,-.2,.08,.17,-.25,-.15,-.35,.16,.14,-.04,.13,.12,-.49,0,.31,.13,-.19,.09,.02,-.05,-.02,-.17,.16,.04,-.45,-.02,-.17,-.1,-.3,-.15,.14,-.07,.08,-.33,.31,-.27,.57,.29,-.04,-.33,.3,-.05,.4,-.22,-.19,-.01,-.03,-.04,-.01,-.4,-.22,-.33,.16,-.4,.2,-.26,-.11,-.17,.2,-.16,-.19,-.23,.04,.25,-.05,-.09,.04,.29,-.15,-.3,-.29,-.29,-.38,-.16,-.06,.11,-.29,-.19,-.31,-.26,.3,.09,.12,-.39,-.32,-.39,.01,.2,-.19,-.06,-.2,.27,-.31,-.01,-.14,.2,-.06,.03,.07,.09,.04,-.35,-.16,-.25,-.01,-.28,.11,.19,.06,-.11,-.09,-.16,.17,.38,.09,.08,-.22,-.22,.12,-.23,.18,.33,.09,.09,-.17,-.3,.25,-.04,.22,.2,.39,.22,-.47,-.54,-.01,.05,.33,.16,.33,.61,.04,-.06,.09,-.06,.12,-.03,.08,-.18,-.13,-.2,-.14,-.4,-.28,.09,-.36,.03,-.18,.04,-.02,.02,.06,-.03,.04,-.04,-.3,-.26,-.04,-.25,-.03,-.15,.17,-.27,-.01,-.47,-.13,.26,.1,-.25,.11,.19,-.09,-.3,.29,-.16,.06,.17,-.36,.16,.15,-.08,.03,-.2,-.06,.04,-.23,.09,-.17,-.17,.28,.18,.06,-.02,-.09,-.11,-.23,-.02,-.51,.4,-.21,.1,-.22,-.19,.05,-.22,.03,-.03,-.12,-.35,-.3,.07,-.12,-.22,.16,-.39,-.34,-.44,.02,-.22,.03,-.12,-.17,.07,.26,.02,-.19,.11,.05,-.27,.03,-.11,-.16,.39,.06,-.31,-.29,.25,.16,.13,-.04,-.3,-.21,-.18,.17,-.24,.03,.41,0,.04,.19,-.11,.12,.17,-.25,-.03,-.3,-.24,-.25,-.29,-.34,.15,-.34,.07,-.11,-.11,-.11,.14,-.33,-.36,.22,-.32,-.33,-.26,.12,-.4,.06,-.28,-.34,.03,-.14,-.32,-.42,-.23,-.26,-.18,.23,-.29,-.06,-.24,-.14,.26,.02,-.41,-.04,-.39,-.39,-.09,.06,-.27,.09,-.15,-.17,-.32,-.28,-.13,-.22,.33,-.48,.33,.11,-.01,-.16,-.3,-.33,-.07,.24,.18,.16,-.08,.29,.18,-.38,-.36,-.31,-.07,-.18,-.12,.28,.29,.16,-.3,-.46,.04,-.21,-.24,-.23,-.29,-.26,-.26,-.29,.07,-.21,-.08,-.27,-.12,.28,-.32,-.5,.27,.16,-.11,-.04,-.16,-.31,-.21,-.23,-.2,-.28,-.04,-.4,-.42,-.25,.18,-.01,-.22,-.15,-.09,.3,-.17,-.13,-.3,-.09,.05,-.11,-.38,-.4,-.34,-.32,-.22,-.14,-.41,.03,-.33,-.17,-.27,-.52,-.24,.24,-.2,-.23,-.41,-.01,-.07,.18,.18,-.15,.02,-.34,.02,.28,.03,-.04,-.02,-.05,.13,-.51,-.2,-.06,-.18,-.22,.08,.37,-.24,-.2,.09,-.04,-.08,-.35,-.07,.27,.02,-.44,-.33,.09,-.01,-.39,.25,-.42,-.24,-.24,.12,.23,.19,-.19,-.16,.01,-.24,-.11,-.01,.21,-.12,-.16,-.12,.17,-.3,-.06,.11,-.37,.35,-.06,.24,-.19,-.05,-.03,-.31,-.34,-.08,.18,.33,.22,.1,.35,-.24,-.31,-.08,.01,.1,-.37,.29,-.15,-.1,-.31,.29,-.27,.24,-.3,.05,.49,.04,-.22,.25,.2,-.05,-.12,-.25,-.06,-.01,.22,-.02,.04,.42,.07,.13,.03,-.03,.22,-.06,-.18,.51,.26,.31,.19,-.2,.11,-.17,.05,.11,.21,.3,-.07,.31,.3,.27,.3,-.15,.4,.19,.34,.29,-.04,.32,.11,.48,.3,-.1,-.13,-.08,.02,-.14,0,-.36,-.26,.09,-.36,-.34,-.12,.12,-.01,-.23,-.3,.03,-.11,-.24,.04,.13,-.28,-.26,-.36,-.31,.12,-.1,-.3,.23,-.03,-.19,.01,-.14,-.33,-.24,.03,.06,-.09,-.25,.09,.07,-.22,-.04,-.06,-.16,-.05,-.26,-.26,-.18,-.36,-.04,.2,-.05,-.18,.3,-.27,-.39,.26,-.14,.07,-.12,.03,-.14,.15,-.08,-.08,-.28,-.22,-.24,.02,-.06,.18,.01,.19,-.22,-.09,-.07,-.12,-.18,-.07,.14,0,-.06,-.13,.44,-.06,-.13,-.02,-.14,.02,-.01,.26,.19,.09,.32,.02,.26,.08,.06,.27,.13,-.24,.29,-.17,.03,.32,-.02,-.23,-.03,.14,-.05,-.07,.09,-.06,-.25,-.12,.04,.08,-.35,.1,.19,-.26,-.04,0,-.23,.11,.19,.05,-.3,.13,-.11,-.05,-.05,-.06,.09,-.15,.19,-.17,-.28,-.31,-.09,-.18,-.15,-.11,.3,.13,-.15,.26,-.03,-.18,-.05,-.36,-.29,-.01,-.1,-.16,-.26,.04,.29,.03,-.29,.01,-.11,.14,-.15,-.09,-.38,-.04,-.13,-.26,-.24,-.08,-.06,.03,-.03,-.13,-.02,.22,-.11,.06,-.2,-.06,-.33,-.15,-.02,-.16,-.43,-.14,.31,-.16,.03,-.16,.2,-.05,-.15,-.13,-.04,.11,.11,-.28,-.3,-.22,-.27,-.22,-.08,.24,.08,.14,-.39,.28,.28,-.22,-.11,-.15,-.23,.06,-.22,-.3,.39,-.22,-.17,.15,.06,-.27,.34,.21,-.09,-.02,-.08,-.11,.18,-.18,-.3,-.2,.62,-.16,.05,.29,-.02,-.1,.51,-.04,-.21,.06,-.09,-.38,.11,-.05,.21,-.18,-.15,-.2,-.16,-.25,-.1,-.16,.22,.07,.05,-.03,-.16,-.25,.01,-.28,-.42,-.08,-.09,.23,.09,.14,-.04,.22,.12,-.35,-.4,-.27,-.31,.11,-.2,.09,.02,.06,.08,-.11,.02,.26,-.11,.71,-.12,.81,-.3,-.12,.04,-.31,-.04,.12,-.25,.16,.05,-.22,-.01,.4,.13,.21,-.11,-.1,.04,-.3,-.3,-.17,.13,-.22,-.23,-.2,-.21,-.21,-.37,-.1,.01,-.21,-.26,.12,.04,.06,.11,.1,.29,-.41,-.26,-.19,-.04,-.29,-.02,-.19,.04,-.11,-.29,-.08,.03,-.19,.19,.09,-.13,.07,-.01,-.21,-.25,-.07,.28,.1,.15,-.27,-.44,.2,-.01,.23,-.16,.03,-.24,-.17,-.36,-.37,-.09,.03,-.12,-.22,-.01,-.06,.35,-.09,.3,.03,.18,.22,.08,-.04,.22,-.11,.05,-.31,-.03,.02,.33,-.27,-.36,-.05,-.16,.41,.05,.07,.23,-.26,-.36,-.34,-.48,.07,0,-.26,.01,-.01,-.37,-.47,-.22,-.35,-.04,-.16,.08,.02,.2,.05,-.3,-.29,-.12,-.13,.11,.03,-.27,-.03,-.07,-.14,-.04,-.36,-.26,-.22,-.28,-.36,-.29,.09,-.1,.07,.07,-.2,.01,-.13,-.06,-.33,-.29,-.17,-.27,.07,-.35,-.05,-.21,.14,-.13,-.15,-.11,-.42,-.35,-.21,.13,.19,.21,-.29,.37,-.45,.21,.22,.06,-.02,.09,-.2,-.28,.46,.03,.07,.04,-.11,-.31,.23,.22,-.01,0,-.23,.55,.21,-.07,-.16,.07,.31,-.27,-.13,-.24,-.14,-.36,.42,-.03,.09,-.02,.02,-.03,-.41,-.28,.4,.41,-.17,-.15,-.14,-.35,-.2,.1,-.07,-.36,.08,-.17,-.39,.16,-.08,-.25,-.27,.28,-.2,-.34,-.07,-.28,-.04,-.29,-.26,-.23,.18,.07,-.04,.01,.21,.13,-.01,-.1,-.06,-.17,-.33,1,.44,-.33,-.01,.22,-.05,-.1,-.45,-.09,-.21,-.25,-.23,-.1,-.1,-.13,.09,.04,-.06,-.36,.02,-.12,-.09,-.4,-.39,-.19,-.27,-.27,-.26,-.43,-.19,-.32,.5,.13,.02,-.29,.16,-.34,-.21,-.06,-.21,-.26,-.38,.3,-.2,.08,-.01,-.38,-.12,.26,-.4,.29,.07,-.33,-.14,.11,-.33,-.34,-.09,-.35,-.01,-.14,.17,.09,-.28,.33,.22,.01,-.13,-.34,-.1,.3,.15,.14,-.31,-.28,-.26,-.02,-.32,-.22,.3,-.16,-.02,-.27,-.36,-.39,-.33,-.18,-.17,-.24,-.18,.22,-.29,-.23,-.26,.13,-.36,-.3,-.35,-.38,-.36,-.42,-.13,-.05,-.32,-.31,-.26,-.33,-.25,.31,-.28,-.15,.06,.22,-.31,-.43,-.37,.38,.13,-.27,-.27,-.24,-.23,-.07,.03,-.21,.17,-.28,.03,-.41,-.17,-.17,-.06,-.12,-.09,-.16,.1,-.33,.21,.15,-.01,-.39,-.41,.16,-.07];export{a as rvalData};
