const a=[-.1,.13,.34,-.14,.34,.03,.45,-.11,-.05,.17,.05,.71,.03,-.22,.11,.03,-.08,.18,.08,.07,0,-.13,-.18,.03,.09,.24,.05,.03,.16,-.01,.22,.05,.27,.14,.03,.08,.23,.02,.38,.22,.02,.29,.23,.02,.01,-.06,.15,-.03,-.18,.19,.13,.07,.19,.23,.41,.03,.07,.14,-.02,.3,.26,.41,.27,-.1,.16,-.09,.32,.04,.04,.1,-.29,.26,.21,-.01,.36,.13,-.13,.25,.19,-.02,-.2,.28,-.01,.26,.46,.03,.19,.09,-.28,.07,.3,.07,-.02,-.27,.41,.1,-.31,-.16,.43,.26,-.14,.37,.54,-.26,.28,.02,-.26,-.2,.22,.36,-.21,.28,.07,-.4,.38,.29,.28,-.17,-.18,.06,-.18,-.04,.23,0,-.1,.21,.39,-.03,-.11,.22,-.1,-.16,-.01,.17,-.08,-.11,.05,-.01,-.12,.05,.34,.02,.23,.18,.04,-.04,.04,.31,.26,-.25,.36,-.09,.09,-.03,-.14,.16,-.13,.24,-.14,.04,.01,.33,-.24,.32,-.01,.22,.08,-.12,.12,.2,.11,-.16,-.04,-.15,.19,-.19,.14,-.13,.17,.28,-.38,.33,.03,.27,.3,.11,-.13,.08,.13,.33,.08,.02,.48,.19,.28,.31,.42,.34,-.11,.26,-.02,.17,.23,-.28,-.19,.4,-.08,.1,.13,.15,-.14,.09,.4,.17,.13,.16,.12,-.16,-.15,-.18,.23,.28,.36,.29,.28,.23,-.01,-.12,.5,.1,.02,-.24,.14,.35,.01,.03,.14,-.1,.12,.09,.25,.11,-.12,.03,-.06,-.18,.3,-.23,0,-.01,.19,.11,.47,.28,.36,.09,-.06,.12,.12,.31,-.13,.29,.1,.34,.13,.34,.07,.26,-.01,.17,.39,-.13,.2,.36,.21,.3,-.11,.14,.35,-.2,.11,-.23,-.03,-.19,.28,.12,-.04,.16,.41,.15,-.07,.12,.21,-.04,-.02,.27,-.09,-.04,-.47,.16,.02,.35,.23,-.07,.67,.07,-.03,.28,.26,-.04,.27,-.31,-.03,-.04,.4,.17,.08,.35,.36,.06,.25,.61,.09,.34,.15,.21,.26,.05,-.05,.22,-.3,.23,.37,-.07,-.1,-.04,-.06,.19,-.27,-.06,.25,.31,.07,-.11,.24,.37,-.05,.16,.24,.04,.3,-.08,.03,.29,-.28,.01,.04,-.09,.51,.31,.03,-.39,.19,-.19,-.03,-.32,.1,.26,.28,-.21,-.04,-.2,-.09,-.01,.28,.48,.09,.19,-.04,.16,-.03,.17,.21,-.07,-.06,.32,-.13,.13,.42,.39,.42,-.03,.39,-.17,-.16,.35,-.18,-.09,.07,-.06,.47,.19,.35,.01,.11,.02,.07,.41,.29,.28,.33,-.36,0,.42,.4,-.09,.36,.31,.12,-.42,-.12,.24,-.06,0,.04,.23,.25,-.07,.04,-.02,-.16,.01,.04,.16,.08,.27,-.23,.28,.32,.35,.32,.22,.23,-.06,.18,.22,.29,.25,-.11,-.18,-.02,.2,-.31,.26,-.16,-.12,-.13,.25,.13,.15,.33,.37,-.4,.23,-.19,.11,-.2,.08,-.14,.26,-.22,.24,.21,-.2,.15,.22,.19,-.1,.31,-.07,.28,.21,.34,.01,.07,-.04,.25,-.1,.26,.3,.12,.73,-.27,-.1,.36,.25,.11,-.04,.37,.2,.19,.09,.42,.06,.35,-.21,.23,.23,.25,.26,.32,.11,.24,.08,.1,.01,.13,-.08,.2,.21,.17,.38,.21,.13,.37,.07,0,.22,.06,.2,.02,.08,-.37,-.12,.14,.2,.33,.21,-.01,.7,.04,.3,-.11,.02,-.1,.14,.02,0,.43,-.01,-.14,.23,.33,.3,.18,-.15,-.11,-.03,-.18,.14,.29,-.05,.04,-.18,-.01,-.13,.01,-.07,.15,0,.36,.33,-.07,-.29,.33,.34,-.09,-.09,.16,.09,-.13,.2,.29,.02,.35,.15,.32,.37,-.19,.22,-.09,.08,.05,.37,-.18,-.27,.21,.31,.21,-.01,.4,.32,.37,.3,.27,-.12,.27,-.07,.05,.03,-.08,.14,.12,.03,-.05,-.13,.34,-.13,-.09,.09,.15,-.09,.18,.04,.24,.28,-.09,.15,.35,-.19,-.03,-.32,-.01,.17,.34,.34,.26,-.02,-.24,-.01,-.2,.34,-.17,.04,.46,.36,-.06,.27,.19,.32,-.16,-.31,-.07,.32,.18,.26,.09,-.23,-.12,.02,.35,.33,.28,.23,.08,.33,.13,.18,.16,.19,-.03,.2,-.03,-.09,.52,.08,.33,.35,-.11,-.18,-.52,-.01,.25,.25,.14,.08,-.24,.25,.29,-.16,-.05,.04,.12,-.04,.12,-.27,.23,.01,.47,-.3,.29,-.14,.09,.19,.12,-.16,-.11,.21,.04,-.06,.27,0,.14,.04,.44,-.12,-.18,.45,-.07,-.17,-.09,.37,.22,-.04,.22,.12,.01,-.07,-.19,.37,-.16,.5,.36,.07,.1,.04,.19,-.05,.06,-.15,.05,.26,-.19,-.01,.05,-.14,-.06,.17,.2,.21,-.06,-.08,.36,.11,.21,.28,-.06,.07,.32,.09,.34,-.17,.22,.33,.13,.22,.26,-.06,0,.01,.13,.21,.38,-.01,.19,-.01,.14,-.22,.33,.27,.3,.26,.27,.3,.33,.32,.26,.17,.07,-.04,-.15,.22,.32,.06,.26,-.13,.34,.21,-.23,.36,-.25,.26,-.35,.37,.13,.26,-.01,-.23,.19,.07,.07,-.16,.38,-.09,.41,0,-.36,-.19,.05,.29,.05,.04,-.15,.41,-.12,.24,-.05,.11,-.06,-.04,0,.22,.03,.43,.4,.45,-.01,.08,.26,-.21,.35,.31,-.02,-.01,-.2,.35,-.2,-.18,.11,-.05,-.04,-.18,.02,0,.04,.17,.21,.28,-.03,-.03,.24,.28,-.09,-.03,.09,.06,-.06,.01,.05,-.19,-.14,.14,.18,.18,.15,.27,.05,.24,.1,.11,.03,.15,.07,.34,.23,.01,.13,.16,.37,-.13,.32,-.17,-.27,.19,.28,-.35,-.15,-.06,.36,.27,.09,.25,-.11,-.2,.05,.18,.12,.11,-.05,0,.03,-.02,-.07,.01,.38,.04,.04,.05,-.13,-.07,.16,-.04,-.08,.29,.34,.38,.22,.29,.31,.32,.03,.3,.28,.32,.42,-.43,.2,.11,.38,.33,-.1,.14,.15,.17,0,.1,-.22,.3,.34,-.06,-.13,-.23,.22,.05,-.02,.09,.32,.14,.32,.11,.21,-.02,-.06,-.13,.41,.15,.04,.07,-.31,-.4,-.11,-.07,.08,-.24,.23,-.2,-.12,.19,.14,.24,.3,-.15,-.21,-.11,-.01,-.13,-.04,.08,.12,.19,.08,-.1,.07,-.08,-.07,.1,-.33,-.35,-.32,.13,.21,.01,.17,.11,-.07,.04,-.04,.14,-.11,.1,0,.24,.12,0,-.03,.07,-.01,.07,.06,-.05,.26,.08,.04,.51,-.28,.03,.31,-.1,.1,-.08,0,-.15,.19,.32,0,.41,.18,-.01,.24,-.17,-.08,.32,-.15,-.04,.12,.18,.22,-.17,0,.35,.08,.09,1,-.05,-.02,-.09,-.13,.07,.17,.16,-.08,.04,-.17,.09,.22,.08,-.08,-.02,.39,.04,.14,.15,.25,.34,.12,.01,.26,.09,.29,.32,.1,-.06,-.16,-.1,.16,-.12,-.02,.02,-.14,.18,-.17,.02,.25,-.03,.29,.28,-.15,.2,.28,.27,-.2,-.23,-.04,-.03,.31,-.01,.25,.17,.33,.22,-.04,.19,.14,-.01,.03,-.07,.2,.09,-.1,.26,.11,.12,-.09,-.1,-.21,-.05,-.2,.11,.25,.06,-.08,.36,.3,-.04,.32,.36,.21,.05,.04,-.02,.23,0,.01,.4,.34,0,.19,.12,.3,-.3,.13,-.07,.19,.3,.14,.18,-.02,.05,.15,.1,.06,.26,.03,.19,.25,.14,.3,.19,.3,.18,.05,.06,-.17,.24,.38,-.36,.17,-.01,.1,.04,.09,.02,.09,-.03,-.18,.18,.29,.19,0,.36,.06,-.15,-.22,.11,.31,.08,-.05,.32,.37,.01,-.13,.32,.06,.38,.3,.36,.07,.38,.28,-.05,.38,.05,-.12,-.17,.31,.25,-.09,.26,.33,.15,.08,.28,.15,-.01,.09,.29,.37,-.2,.22,.24,-.12,.01,.28,.11,.32,.09,.19,.02,.01,.01,.22,.28,.33,-.05,.01,.1,-.11,.09,.18,.05,.29,-.24,0,.31,.21,-.12,.23,.01,-.18,.35,-.33,.3,-.09,-.11,-.07,.25,-.04,-.14,.11,.1,.29,-.05,.31,.03,.21,-.16,.18,-.07,-.04,-.34,.25,0,.07,.05,.04,.01,.34,-.02,.02,0,.19,.26,.32,.27,.01,.22,-.05,.39,.08,.29,.17,.11,-.12,-.06,.2,.14,.22,.07,.26,.26,.19,.32,-.22,.18,.04,.06,.06,.16,.28,.11,0,.08,-.04,-.21,.11,.14,.31,.33,.24,-.1,.03,.37,-.01,.12,.04,.12,-.19,-.15,.07,.31,-.02,-.13,-.14,.02,.05,.04,-.07,.31,-.12,-.08,.13,.03,.22,.11,.09,.04,.05,.2,.15,-.01,.16,.26,-.03,-.12,-.22,-.08,.26,.14,-.01,-.09,-.19,-.01,.01,.2,.1,-.15,-.23,-.2,.14,-.28,-.06,-.18,-.1,.06,-.07,.18,-.01,.04,.21,.29,-.17,.24,.14,.28,.23,.04,.09,.01,.3,-.36,-.03,.1,-.1,.34,.18,.04,-.12,.13,-.07,.14,.35,.35,.25,.41,.19,.14,0,-.25,.05,-.17,-.05,.08,-.33,.03,-.18,.15,.23,.1,-.13,.15,-.18,.1,.35,.17,.29,.18,.18,-.04,.08,.16,.25,.09,-.14,.23,.18,-.14,-.01,-.04,.05,.06,-.2,-.19,.37,.06,.26,.17,.25,-.1,-.01,.16,-.09,-.1,.17,-.18,.26,.27,.07,-.12,.16,.34,.25,-.14,-.27,-.13,.34,-.11,.34,.23,.34,-.11,.27,.15,-.08,.23,-.02,.33,.39,-.12,-.24,.28,-.09,.34,.1,.1,.09,.26,.06,.11,.14,.12,-.12,-.06,.27,.06,-.06,.22,.25,.1,.26,.11,.09,-.08,-.15,.24,-.25,-.1,.38,-.03,.21,.01,.23,.22,.15,.3,0,.07,.34,.04,.09,-.1,.09,.23,.1,.11,.36,0,.2,.28,.21,.34,.34,.21,.35,.33,.37,0,-.08,.01,.27,.09,.27,-.14,.33,.31,-.01,.21,.26,.05,.24,.19,.08,-.11,.26,.21,.12,.1,.31,.27,.11,.21,.32,.38,.04,.29,.03,.11,.11,-.11,.32,.06,-.07,.04,.4,.17,.33,.03,.11,.11,.43,.18,.31,-.08,-.28,.08,-.04,-.06,.23,.02,0,.12,-.18,.09,.22,.22,.24,.32,0,-.05,.31,-.05,.16,.42,-.07,-.16,.06,.02,.22,.26,.16,.34,-.13,.25,-.15,.33,-.01,.08,-.06,.05,-.03,.03,.31,-.11,.3,.07,.24,-.08,-.01,.42,.18,.3,.16,.21,.13,-.04,.01,.24,.36,-.1,-.12,.22,.33,.24,.2,.25,.14,-.14,.28,.01,.19,-.01,-.01,.3,.3,.34,.41,.35,.38,.2,.3,.17,-.12,.25,.14,-.22,.27,-.03,.34,-.07,.37,.25,.06,.28,-.13,-.1,.01,.13,-.1,.1,.17,-.13,-.03,.04,.14,.1,.26,.47,.34,.06,.06,.4,.12,.12,.16,.18,.28,-.07,-.28,.06,.21,-.02,-.42,-.14,.27,.27,.03,.32,.33,.21,-.09,.19,.32,-.11,-.05,-.06,.33,.06,-.02,-.09,-.07,.09,.09,.15,.32,.33,.2,.2,-.09,.27,.13,.25,-.02,.23,-.3,.06,.35,0,.41,.32,.46,.4,.08,.15,.19,.24,-.14,.09,0,.09,-.18,-.28,-.16,-.44,.23,-.04,.03,-.07,-.32,.11,.35,.15,-.09,.2,.32,-.17,.36,-.19,-.18,-.28,.02,.35,.34,.34,.27,-.19,.26,.07,.17,.26,.16,.15,.25,.3,.28,.24,.22,.05,.08,.03,.27,.37,.29,-.16,-.23,.17,.22,.08,.34,-.25,.06,.23,.3,.35,.31,.26,.39,.14,.29,-.22,-.37,.33,.2,-.28,-.03,.25,.23,.29,.11,.27,.25,.39,.3,-.03,0,.23,-.19,-.02,.03,.14,-.02,-.04,-.06,.26,-.06,.21,-.18,.03,-.21,-.23,-.02,.2,.19,-.13,.16,.29,.22,.02,.27,-.19,-.1,-.12,-.19,.19,-.08,.02,.3,.34,.23,-.04,.3,-.14,.23,-.12,.24,.06,.17,.21,.11,.17,.14,.23,.02,-.27,-.02,.09,.22,.23,.39,.21,-.2,-.25,.28,.14,.21,.04,.02,-.28,.24,.29,-.17,.37,.31,.05,.31,.02,.3,.27,-.13,-.13,.22,.19,.11,-.18,-.27,.09,0,-.05,.03,.34,-.17,-.05,.22,.16,-.05,.17,.06,-.04,-.09,.28,-.22,.14,.27,.05,.17,0,.12,.33,.03,-.08,.24,-.02,.24,.31,.34,-.14,.28,.31,.28,.21,.23,.2,.13,.21,.3,.23,-.02,.07,-.02,.01,.28,.23,-.21,.18,.19,.3,.23,-.21,.04,.21,.07,-.13,-.11,-.2,-.09,.16,.3,.14,.3,.19,-.4,.33,.12,-.07,.18,.11,.16,.16,.24,.17,-.11,-.3,.36,.2,-.04,.4,.26,.25,.35,.08,.17,-.31,.29,.36,.3,.1,.29,.1,.34,.36,-.13,.23,.35,.18,.16,.23,.25,.16,-.11,.22,.13,.33,-.12,.24,.28,.26,.25,.31,-.18,.36,.11,.07,-.3,.24,.07,.29,-.23,.08,.37,.36,.35,.36,-.01,-.3,-.07,-.07,.33,.05,.33,.16,.19,-.02,-.17,.13,-.1,-.2,-.11,.01,0,.03,.25,.03,.01,.25];export{a as rvalData};
