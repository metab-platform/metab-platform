const a=[-.47,.37,.69,-.17,.84,-.08,.27,.02,.43,.36,.62,-.09,.04,-.7,.73,-.02,.35,.01,-.13,-.02,-.05,-.27,.01,.6,.79,.88,-.28,.01,.26,-.19,.5,-.32,.81,-.02,.1,.07,.82,.72,.33,.44,-.04,.86,.48,-.07,.12,.52,.18,-.15,.12,.22,.39,-.14,.26,.82,.26,.61,.52,-.05,.21,.77,.32,.71,.78,-.07,.2,-.15,.88,.71,.01,.04,-.06,.54,.34,-.15,.84,-.02,-.1,.29,.49,.04,-.46,.66,-.02,.8,-.19,-.2,.86,.15,-.73,.67,-.03,.08,.33,-.8,.11,-.03,-.74,-.28,-.2,.37,-.13,.82,.35,-.15,.45,.12,-.1,.02,.82,.48,-.02,.29,0,-.63,-.15,.75,.17,-.21,-.31,.79,-.05,-.09,.33,-.12,-.03,.5,.71,-.3,-.14,.9,-.1,-.4,-.06,.07,.29,-.14,-.09,.19,-.13,-.1,.79,-.01,.74,.87,-.08,-.14,.02,-.16,.73,-.13,.82,.18,.03,.06,.02,-.06,.03,-.11,-.21,.7,-.16,.56,.1,.21,.4,.26,.37,-.18,-.14,.81,-.09,-.11,-.03,-.27,.57,-.04,.02,-.04,.2,.81,0,.02,.03,.6,.4,.07,.01,.07,.13,-.19,-.13,.2,.19,.63,.71,.77,.56,.29,-.11,-.33,.52,.7,.91,-.02,-.54,.38,-.05,.19,.19,-.07,-.03,.75,-.1,.87,-.06,.28,-.01,.18,-.05,-.16,.44,.31,.32,.8,.54,.91,-.02,-.14,.17,.01,-.14,-.18,.7,.6,.3,-.02,.66,.34,-.04,.14,.26,.76,-.03,-.23,.35,-.01,.15,.11,.11,-.09,-.02,-.15,.29,.16,.82,0,.07,.49,-.01,.62,.11,-.12,.52,.81,-.19,.4,-.11,.8,.22,.63,-.12,-.39,.86,.65,.71,-.04,.07,.21,.69,.09,.05,-.16,.62,-.5,.12,.63,-.06,.87,-.01,-.16,.01,.17,.76,.08,.1,.51,.47,-.38,.07,.11,.02,.78,-.19,-.11,0,.5,-.09,.5,-.11,.45,.85,-.11,-.1,-.07,.15,.1,-.02,0,.6,.18,.77,-.16,.72,.84,-.08,.1,.75,-.27,0,.14,-.53,.55,.12,.11,-.39,-.07,-.07,.29,.02,-.28,.52,.5,-.26,-.03,.86,.64,.13,.12,.46,.09,.72,-.4,.05,.1,-.33,.69,.18,-.01,.63,.64,.6,.16,.06,-.01,-.15,-.65,-.02,.91,.28,.06,.17,-.31,.43,-.16,.24,.18,.36,.75,0,.02,.09,0,.12,.17,-.03,.26,-.08,-.03,.64,.72,.68,.04,.1,.04,.07,.79,-.41,-.2,-.25,.03,-.17,0,.66,.49,.1,.14,.71,.63,.67,.54,.61,-.48,-.42,.7,-.04,-.02,.82,.64,.07,-.24,.02,.86,-.07,.03,.45,.86,.76,-.04,.12,-.44,-.04,-.21,.74,.01,-.07,.8,-.06,.79,.87,.55,.6,.82,.76,.14,.25,.39,.73,.77,.18,-.46,.49,.38,-.91,-.09,-.09,-.16,-.15,.86,-.04,.64,.75,.7,-.72,.22,-.09,.08,-.42,.02,-.6,.79,.07,.87,.4,.05,.03,.79,.66,.31,.73,-.21,.6,.83,.63,.47,.19,-.06,.35,-.34,.42,.46,.1,-.08,-.06,-.37,.71,.91,-.1,.02,.63,-.24,.13,-.21,.59,.57,.82,-.27,-.14,.65,.7,.33,.79,-.03,.81,.03,.21,-.14,.02,.04,.18,.79,-.07,.77,-.04,-.08,.29,-.12,.09,.23,.08,.66,.12,-.12,-.13,-.23,-.09,-.01,.07,.37,-.31,.07,.14,.04,-.01,0,0,-.2,-.09,.02,.6,.03,-.15,.9,.76,.52,.66,-.03,-.44,-.17,-.18,-.08,.63,-.09,.16,0,-.01,-.21,-.18,.07,.06,.02,.56,.64,.39,-.33,.76,.78,-.1,-.44,.14,.21,-.02,.12,.69,-.01,.45,.8,.81,.56,-.08,.81,-.06,.16,0,.58,.04,-.87,.75,.71,.26,.18,.66,.86,.72,.16,.58,-.24,-.02,-.22,.15,-.06,.08,.74,-.03,.19,-.22,.02,.8,0,.08,-.07,-.04,-.13,.08,-.09,-.08,-.28,.4,.02,.72,-.12,-.03,-.28,-.23,.13,.31,.36,.78,-.16,-.14,-.24,-.04,.8,-.42,-.04,.35,.78,-.34,.77,.05,.42,-.21,-.88,.02,.84,.78,.08,.6,-.03,-.16,.11,.77,.53,.85,-.04,.24,.07,.14,-.03,.77,.84,.5,.01,-.17,-.22,.29,-.37,.68,.88,-.49,.07,-.06,-.27,.4,.69,-.04,.15,-.58,.84,.86,-.13,-.1,-.26,-.23,-.07,-.16,-.12,.25,.1,.57,-.55,.78,.25,.52,.73,-.03,.05,-.27,.37,-.12,-.22,.9,-.19,.13,.16,-.15,-.05,.16,.08,-.1,-.17,.17,.65,.78,.02,.72,.53,-.27,-.29,-.38,.58,-.57,.24,.72,.05,.39,-.09,.86,-.12,.05,-.14,.54,.49,-.41,-.03,.03,-.45,.48,.78,.04,.47,-.26,-.05,-.2,.24,.73,.25,-.1,.37,.57,-.03,.27,-.19,.84,.33,.45,.73,.75,-.16,.07,.03,-.31,-.12,.8,-.01,.05,-.34,.2,.12,.82,.11,.66,-.08,-.15,.8,.56,.55,.25,.22,-.03,-.18,-.3,-.12,.44,.62,.87,-.14,.79,.75,-.4,.26,.13,.24,-.33,.8,.62,.6,.53,-.35,.01,-.03,-.07,-.26,.71,-.29,.6,-.03,-.61,.03,.09,.84,-.06,.31,-.01,.74,.07,.89,-.14,.13,-.13,-.05,-.09,.91,-.13,-.24,0,-.15,-.02,.12,.11,-.28,.38,.77,.05,-.14,-.24,.72,.11,-.18,.55,-.07,.01,-.16,.49,.01,-.01,.12,-.02,0,.26,-.08,.67,.87,-.13,-.33,-.27,-.16,-.38,-.05,.11,-.14,-.3,.1,0,.05,-.14,-.03,.17,.16,-.07,-.01,-.18,.62,.18,.81,.84,.07,.06,.45,.76,.07,.81,-.56,-.45,.27,.66,-.03,-.49,-.19,.46,1,.18,-.14,-.06,.06,-.13,.68,.17,-.02,0,-.16,-.15,-.05,-.08,-.21,.56,.28,-.15,-.11,-.24,.05,-.13,.04,-.35,.59,.77,.78,-.04,.78,.7,.04,.19,.62,.73,.86,.78,-.78,.29,-.06,.51,.86,-.06,-.06,-.04,.74,-.04,0,.14,.73,.15,.17,.03,.01,-.02,-.15,.03,.41,.87,-.16,.83,.03,.82,.11,.1,-.06,.61,.21,-.02,0,-.52,-.14,-.05,-.35,.63,-.69,.71,.07,-.01,0,.17,.67,.88,-.14,-.25,.21,.18,.02,-.39,.04,-.04,.2,.45,-.11,.11,-.01,-.09,-.07,.07,.01,.08,.14,-.03,-.12,.06,-.15,.07,.24,-.18,.11,-.14,-.09,.08,.5,.06,-.04,-.12,-.21,.55,-.39,-.33,.13,.82,-.03,.37,.33,.13,.12,.72,.14,.05,0,-.17,-.06,.19,.14,-.04,.55,.92,.06,.44,-.02,-.18,.8,-.1,-.15,-.1,.03,.05,-.25,-.12,.46,-.07,.59,.27,.03,.51,-.14,-.39,.01,-.16,.82,-.08,-.11,.09,.84,.17,.12,-.15,.49,.63,-.15,.15,.13,.27,.68,-.08,.56,.78,-.19,.57,.88,-.02,-.25,.06,-.07,.21,.1,.15,-.19,-.25,.8,.08,-.37,.74,-.26,.43,.66,-.01,.04,.84,.76,-.15,-.3,-.42,.51,.68,.44,.7,.1,.62,-.1,-.06,.31,.3,-.05,-.14,-.16,-.15,.84,.07,.88,-.21,.75,-.26,.08,-.27,-.02,-.05,.59,-.07,-.17,-.19,.73,.84,-.17,.09,.8,.82,-.18,.02,-.19,.89,-.06,.14,.48,.8,-.1,.9,.22,.53,-.01,0,-.32,.11,.64,.16,-.05,-.09,-.01,0,-.08,.76,.58,-.25,.16,.78,.21,.86,.68,.62,.46,-.14,.05,-.6,.09,.53,.19,.85,.05,.57,.05,-.17,-.16,.02,-.26,-.38,.06,.84,.87,.11,.54,0,-.09,-.37,.01,.83,-.03,-.21,.73,.7,-.43,-.01,.49,-.07,.81,.1,.69,-.33,.62,.41,.01,.73,-.03,-.23,-.34,.61,-.03,.06,.78,.62,-.09,-.13,.82,.46,-.09,-.07,.04,.09,-.15,.03,-.1,-.1,-.35,.71,.13,.78,.75,.73,.03,-.08,-.09,.87,.86,.67,-.13,-.07,-.05,-.12,.24,.7,-.05,.81,-.14,-.2,-.02,.09,.18,.4,-.31,-.09,.63,-.76,.76,.18,-.25,0,.21,-.3,-.17,.38,-.09,.79,-.01,.72,.33,.18,-.12,.41,-.39,-.16,-.16,.59,-.17,.57,.08,.36,-.11,.79,.13,-.08,0,-.13,.82,.81,.56,-.33,.08,-.13,.64,.66,.55,.82,.54,.18,.15,.13,.74,.21,-.21,.91,-.06,.26,.72,-.73,.21,-.1,0,.16,.58,.86,-.01,.18,-.13,-.16,-.21,-.12,-.07,.57,.78,.36,-.21,.05,.74,-.41,.31,-.06,.18,-.28,-.04,.05,.67,.52,-.17,-.1,.6,.24,.05,.15,.49,-.12,-.22,.2,.12,.44,.51,.18,.14,-.01,.22,-.27,-.04,.38,.58,.02,-.1,-.4,-.04,.62,.13,-.09,-.29,-.41,.11,.16,.74,.13,-.18,-.29,-.47,.2,-.33,.06,-.18,-.1,-.08,0,.42,.25,.06,.42,.69,-.07,.39,.1,.35,.88,.24,-.17,.2,.79,-.27,-.08,-.08,.1,.62,.51,.73,.14,.28,-.24,-.21,.64,.67,.07,.01,-.13,.87,-.03,-.09,.18,-.05,.48,.05,0,.17,.12,.17,.65,-.09,-.02,.88,-.1,.12,.82,.18,.83,.87,-.02,-.35,.29,.1,.23,.61,-.3,.85,-.04,-.19,-.07,-.14,.09,.32,-.47,-.24,.18,.78,.89,.69,.53,-.01,-.09,-.01,-.19,-.1,.28,-.19,.27,.68,.21,-.13,.23,.29,.05,-.23,-.44,-.14,.61,-.27,.62,.39,.4,-.2,.03,.37,-.03,.39,-.2,.62,.31,-.01,-.09,.25,-.34,.74,.26,0,-.07,.49,.08,.05,.15,.64,0,.21,.89,.17,-.36,.35,.84,.3,0,.62,.76,.35,.18,.3,-.12,.19,.82,-.21,.43,.56,-.04,.1,.36,.23,-.03,.22,.79,-.09,.16,-.19,-.21,.6,.13,.42,.63,.02,0,.6,.53,.79,.71,-.01,.63,.69,.63,.45,-.26,.01,.66,.06,.69,.23,.71,.6,-.06,.08,.74,.35,.6,.62,.19,-.25,.57,.58,.27,.07,.62,.29,.72,.05,.68,.66,.67,.75,-.05,.7,-.01,-.17,.49,.74,-.33,.02,.69,.46,.59,.39,.27,.56,.64,.84,.81,-.09,-.07,.11,.36,-.01,.73,.11,.14,.81,.09,.44,.39,.24,.77,.66,-.17,-.04,.61,.43,.46,.63,-.24,.14,.77,.3,.26,.68,.27,.73,.11,.8,-.19,.37,.16,-.06,.03,.07,.05,.31,.69,.15,.5,.11,.33,-.03,.04,.69,.72,.65,.72,.82,-.16,.26,.05,.16,.3,.02,-.17,.71,.5,.8,-.09,.54,-.18,-.01,.3,.17,.5,-.26,.09,.84,.75,.64,.67,-.03,.61,.31,.56,.27,-.56,.53,.33,-.36,.69,-.08,.6,.02,.62,.6,.03,.82,-.14,.3,.39,.13,.09,.59,.24,0,0,.11,.06,-.09,.01,.75,.78,.66,-.24,.72,.64,.64,.87,.73,.84,.07,-.14,-.07,.76,0,-.36,-.08,.22,.23,.09,.8,.66,.47,-.07,.87,.39,-.14,.49,.09,.72,.71,.54,-.4,-.05,.05,-.11,.03,.06,.62,.61,.53,-.25,.44,.22,.77,-.07,.1,-.24,.13,.71,-.14,.6,.49,.69,.62,.02,.54,.45,.8,-.17,.23,-.1,.55,-.49,-.19,.19,-.56,-.02,-.33,-.09,-.06,-.21,.04,.48,.48,-.2,.92,.77,-.15,.6,-.2,-.27,-.38,.06,.8,.8,.89,.47,.33,.47,.4,.44,.42,.52,.17,.91,.76,.65,.51,.28,.33,.03,.51,.72,.72,-.08,-.04,.08,.01,.89,.08,.39,-.11,.63,.81,.78,.57,.8,.85,.68,.1,.5,.02,-.27,.7,-.1,-.15,-.1,.64,.81,.64,.25,.08,.46,.21,.66,.17,-.11,.08,-.08,-.07,-.12,.71,-.43,.19,-.08,.79,-.18,.7,-.13,-.15,.09,.04,-.19,-.2,.88,-.07,-.09,.46,.1,.28,.76,-.22,-.45,-.21,.03,.82,-.1,-.17,.55,.38,.33,-.02,.87,-.05,.82,.03,.89,.08,.3,.23,.09,.52,.13,.15,-.16,-.8,-.15,-.23,.6,.69,.77,.37,-.36,.07,.75,.25,.35,.03,-.04,-.21,.81,.72,.04,.53,.8,.42,.22,.02,.79,.88,-.09,-.17,.26,.36,.47,.14,-.25,.69,.46,-.06,-.1,.78,-.19,.09,.78,-.06,-.05,.64,-.01,-.05,-.22,.81,-.53,.68,-.08,.02,-.16,-.07,.6,.41,-.18,0,.09,-.02,.84,.87,.54,.06,.53,.72,.86,.77,.8,.13,-.02,.35,.85,-.03,.17,-.1,-.2,.04,.89,.84,-.27,.83,-.14,.23,.71,.12,.34,-.07,.12,-.39,-.25,.01,.14,.61,.77,.64,.76,.37,-.01,.48,.16,.34,.09,-.02,.09,.68,.9,.09,-.09,-.73,.21,.62,.28,.72,.17,.92,.12,-.07,.72,-.81,.88,.76,.86,.14,.72,.1,.66,.63,.21,.52,.6,.86,.49,.86,.87,.74,.05,.88,.34,.24,-.16,.92,.88,.91,.83,.89,-.31,.69,.63,.14,-.71,.9,-.07,.75,-.39,.01,.64,.36,.89,.81,-.09,.07,.01,-.17,.79,-.09,.6,.47,.73,-.19,-.08,.04,-.26,.08,.14,.49,-.04,-.08,.83,-.03,.19,.47];export{a as rvalData};
