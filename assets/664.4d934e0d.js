const a=[.17,.74,.15,.38,.07,0,.4,.01,.02,.05,0,.03,.07,.05,0,.13,.63,.53,.5,.46,.72,0,.12,0,.01,.6,0,0,.13,0,.07,.01,.49,0,0,.59,.63,0,.05,.23,.14,.22,0,.12,.43,0,.09,.8,0,.01,.36,.02,.08,.98,0,.01,.07,0,0,.14,0,.03,.01,.97,.18,.02,.04,0,.82,.74,.92,.78,0,.32,.23,.6,.02,0,.97,.3,.07,.21,.15,.3,.29,0,.7,.32,.3,.08,0,.5,.14,.09,.54,.19,.11,.73,.06,0,.72,.02,0,.3,0,.06,0,0,.63,0,.36,0,.53,.99,.28,.49,.94,.01,.3,.1,.1,.01,.01,.24,.11,.02,.03,.27,.08,.41,0,.01,.95,0,.9,.6,0,.37,.02,.46,0,.16,0,.42,.04,.21,.82,0,0,.59,.04,.14,.9,.71,0,0,.5,.01,.67,0,0,0,.01,.06,.13,0,.8,.04,0,.18,.03,.06,0,0,.61,0,.76,0,0,.91,0,.77,.24,.52,0,.62,.93,.01,0,.06,.46,0,.06,0,0,.31,0,0,.3,.02,.03,.12,.59,.12,.31,0,.15,0,0,.32,0,0,.13,.12,0,.43,.63,0,0,0,0,0,0,.5,.06,.62,0,.02,0,.02,.97,.83,.43,.14,.03,.01,0,0,0,.42,0,0,0,0,.11,.01,.44,.33,.91,.18,0,.01,0,.38,0,0,.85,.76,.03,.88,.61,0,.26,0,0,0,.02,.04,.21,.96,.94,.53,1,.09,.36,.73,0,0,.04,0,0,0,0,.3,0,.82,0,.18,0,.04,.39,0,.36,.11,.14,0,.01,.77,.16,0,.53,.38,.08,.28,.03,.61,.87,0,0,0,.18,.91,.01,.14,0,0,0,0,.05,.06,.11,.01,.01,.12,0,0,.08,0,.54,0,.03,.01,.31,.04,.05,.43,.02,0,.33,0,0,.01,.26,.88,.42,.04,.27,0,.01,0,0,0,.01,0,.37,0,.01,.23,.01,.69,.03,.46,0,0,.5,.16,0,.86,0,.29,0,.62,0,.01,0,0,.15,.19,.45,0,.91,.92,.28,.86,.52,.81,.66,.62,.18,.11,.01,.02,.54,.28,.02,.31,0,.36,0,.5,.47,0,.02,.21,0,.88,.07,.01,.05,0,.07,.06,.01,.01,0,.54,0,.81,0,0,.06,.16,.05,.01,0,.87,.98,.04,0,0,.02,.01,.14,.14,0,.83,.62,.06,.21,0,0,.38,.01,.08,0,0,.73,.14,.06,.07,.07,0,.23,0,.1,0,0,.75,0,.76,.08,.01,.5,0,.57,.33,.7,.79,.73,.9,0,.51,.01,.47,0,.9,.07,.8,.23,0,0,.06,.03,.33,0,0,0,.09,.43,.07,.87,.04,.07,0,0,.34,0,.05,.45,0,0,.01,0,.21,.15,.29,0,.23,.85,0,0,0,.03,.56,0,0,0,0,0,.71,.61,.02,.04,1,0,.07,.11,.01,.73,.01,0,0,.91,0,.01,.01,0,.35,0,.25,.59,0,.02,0,.09,.73,0,0,.02,.03,0,.59,.12,.56,.15,.43,0,0,0,.97,.29,0,.07,.15,.58,.28,.67,.22,0,.2,.04,.1,.02,.02,.21,.36,.3,.08,0,.17,.08,0,0,0,0,.01,.56,0,.01,.36,.3,.58,.86,0,.18,.36,.62,.44,0,.04,.41,.4,.03,0,.44,0,0,.8,.31,.08,.62,.15,.26,0,.75,.99,.25,.01,.02,.01,.02,.11,0,.6,0,.02,.16,0,0,.2,.35,0,.04,0,.21,0,.82,0,.04,0,0,.71,.01,0,.25,0,0,.27,.04,0,.2,.4,0,.18,.88,.22,0,.04,.19,.8,.23,0,.59,0,.13,0,.43,0,.42,.51,.2,.14,.33,0,0,0,.01,.59,.62,.99,.88,0,.9,.9,0,0,.4,.27,.39,.11,.76,.86,0,0,.01,.18,.01,.01,.02,.99,.17,.29,.11,.92,.01,.04,.12,.66,.24,0,.36,0,0,.04,.93,.82,.18,0,.04,.23,.12,0,.51,.36,.5,.29,.17,0,.13,.01,.34,0,.1,.34,0,0,.26,.57,.01,.77,0,.1,0,0,.45,.82,.05,.07,0,0,.07,.04,.74,.02,.7,.74,.35,.49,.02,.4,.28,.01,.98,0,.44,.61,.01,.38,0,.12,0,0,.11,.01,0,.45,.02,.25,.19,0,.76,.73,.23,.01,.13,0,0,0,.18,0,0,0,0,0,.63,.02,.18,.01,.92,0,.03,.09,0,.01,.9,.37,.05,.26,0,.85,.37,.15,.08,.02,.01,0,.02,0,.19,.8,.19,.23,.12,.27,.04,.6,.42,0,.02,.67,.01,.56,0,.29,.43,.01,.45,.05,.01,0,0,.24,0,0,0,.02,0,0,0,.11,.81,0,.72,.59,.82,.03,0,0,.03,.22,0,.58,.12,.11,0,0,.04,0,.01,0,.4,.33,.55,0,0,0,.17,.11,.46,.01,0,.42,.25,.03,.06,.26,0,.97,0,.02,.08,.22,.07,0,0,.17,.46,.29,.02,.71,.36,.26,.55,.13,.08,.74,.73,0,.26,0,.07,0,0,.02,0,.07,0,0,0,.15,0,.04,.72,.51,0,.08,0,.76,.2,0,0,.07,.43,.28,.12,.15,0,.91,0,.09,.15,.06,0,.78,.01,0,.46,.57,.29,.17,.02,.42,0,.99,0,.2,.14,0,.08,.34,.97,.66,0,.98,0,.42,.35,.15,.02,.48,0,0,0,.04,.53,.01,.14,0,0,.06,.24,0,0,.04,.02,.03,0,.02,.02,0,0,0,0,0,.36,0,.06,.56,.57,.56,.33,.9,.13,.06,.58,.01,.12,.95,.18,0,.04,0,0,0,0,.1,.03,.08,0,.56,.09,.09,.37,0,.37,0,.06,.72,.14,.07,0,0,.1,0,.29,0,.29,.14,.66,.22,0,.68,0,.64,.24,0,.05,.92,.08,0,0,.07,.03,0,.07,.95,.89,.02,0,.78,0,.03,.09,.01,0,.01,.04,.9,.17,.89,0,0,0,.8,.77,.4,.66,0,0,.8,.11,0,.74,.77,0,0,.92,.33,0,.55,.07,.03,.01,.01,.24,0,.15,0,.1,.11,.17,0,0,.06,.8,.33,.39,.88,.05,.42,.01,0,0,.54,0,0,.99,0,0,.89,.05,0,.75,.28,0,.28,.39,0,0,.57,0,.03,.41,.03,.77,.07,.52,0,.02,.05,.73,.16,.12,.5,0,.04,.23,1,.02,.2,.98,.34,0,.12,.33,0,.1,0,0,.03,.05,.75,.06,0,.69,.69,.15,.55,.03,0,0,.01,.81,0,0,.34,.07,.88,.08,.19,0,.89,.71,0,.15,.08,.74,.12,.33,.56,.14,.46,.51,.22,.18,.12,.5,.02,0,.14,.1,.01,.03,.04,0,0,0,.05,.17,0,.06,.57,0,0,.91,0,.02,.16,.22,0,.02,.22,.82,.05,.07,0,.4,0,0,0,0,0,.08,.13,.12,.47,.17,.64,.03,.04,.17,.38,.71,.09,.05,.29,.08,.86,.05,0,.32,.68,.05,0,.36,.08,0,.01,0,0,.45,.5,.09,0,0,0,0,.01,0,.03,.57,.17,.01,0,.03,0,.26,.03,.02,.64,0,0,.19,0,.02,.22,.25,.6,.98,0,0,.32,.02,0,0,0,.99,0,.31,0,.76,.24,.18,.71,.49,0,0,0,.69,.16,0,.36,.48,.07,.09,0,0,.65,.51,.1,.04,0,.14,.74,0,.03,.76,.05,0,0,.73,.01,0,0,.1,.85,0,.87,.35,0,.03,.01,0,.01,.66,.17,.02,0,.84,.4,0,0,0,.41,.69,0,0,0,0,0,.02,.01,.01,.02,0,0,0,0,.09,0,.13,.2,.1,.8,0,.42,.05,0,0,.25,.01,.04,0,.58,.01,.07,.1,.75,0,.01,0,.01,0,0,.52,0,0,.66,.34,.03,0,.8,.13,.1,.11,0,.34,0,0,.02,0,.02,0,0,.16,.09,.07,.02,0,.49,.59,.05,.01,.04,.22,.51,.51,.27,0,.04,.47,0,.08,0,.87,.46,.03,.03,0,.75,0,.01,0,.12,.19,0,.7,.96,.74,.74,.72,.02,.4,.09,.44,.42,.27,.04,.04,.37,.97,0,.18,0,0,0,.07,.55,.92,.02,0,.91,.03,0,0,.32,0,.02,0,.18,0,.59,.36,.04,0,.38,0,.96,.68,0,0,.01,.01,0,.01,0,.79,.45,.83,.39,.94,.7,.39,0,.4,0,.87,0,0,.05,.77,.01,.03,0,.54,.01,.42,.87,.01,0,0,0,0,.03,0,.65,.02,.41,.62,0,0,.12,0,.66,0,.59,0,.07,0,.18,.05,0,.02,0,0,.91,0,0,.7,.72,.03,.43,0,0,.22,0,.06,.7,.02,.1,.79,.76,.08,.86,0,0,.14,0,0,.1,.04,.03,.22,.03,.02,.23,0,0,0,0,0,.22,0,.05,0,0,0,.46,.01,.34,.02,.05,0,0,.01,0,.92,0,.6,.05,0,.04,.01,.07,.84,.12,.49,.24,.38,.23,0,.07,.96,.01,.79,.27,0,0,0,0,.12,.1,.15,0,0,0,.84,.78,.54,.14,.48,.37,.01,.34,0,.81,0,0,.68,0,.5,.17,0,.23,0,0,.02,.8,.11,.04,0,.49,0,.05,0,.12,0,0,0,0,.94,.68,.16,0,.02,0,.62,0,0,0,.01,0,0,0,.01,.03,0,.01,.04,.01,.21,.58,.03,.1,.01,0,.02,0,0,.13,.02,.01,.05,.37,.85,.02,.11,0,0,.03,0,.01,.8,.76,.48,.53,.3,0,.13,.94,0,.47,0,0,.02,.43,.06,.51,.38,.28,0,0,.75,0,0,.49,.1,.18,0,.41,.51,0,0,.09,0,.01,0,.02,0,.16,.03,.25,.95,.65,.01,.96,.22,.48,.15,.1,.47,.01,.56,.08,0,.99,.56,.68,.12,.31,.12,0,.05,.05,.04,.86,.84,.05,0,.01,.66,.21,.64,.61,.09,.08,0,0,.13,.11,.47,.18,.55,0,.05,.42,.01,0,0,.77,.24,.37,.12,0,0,.01,.09,0,.62,0,0,0,0,0,.73,.39,0,0,.55,.77,0,.16,.84,.35,0,.33,0,.96,.51,.02,0,.25,0,.09,.75,0,.01,0,.14,0,.14,.25,.01,.1,.93,.05,.02,.09,0,.11,.01,.04,.31,.57,.64,0,0,.54,.25,.59,.24,.33,0,.44,0,.01,.01,.03,0,.21,.35,.34,.29,0,0,0,.57,.38,.62,.09,.56,.6,.77,.02,0,0,.44,.2,.35,.02,.14,.2,.02,.34,0,.03,.01,.01,.95,0,.04,0,0,.01,.36,.68,.65,.26,.73,.1,.08,.45,0,.03,.02,.62,0,0,.16,0,.01,.33,.01,.67,0,.26,.16,.4,.16,.04,.07,0,.11,0,.06,.01,.91,.02,.4,0,0,.15,.02,.61,.1,.99,.18,.47,0,.95,.7,.16,.08,0,.49,.55,.97,.14,.16,1,.08,0,.29,0,0,.21,.57,.16,.7,.33,0,.53,.66,.16,.88,0,.12,0,.11,.01,.1,0,.25,.24,.28,.3,.16,0,.62,0,.75,.02,.88,.18,.09,.94,.13,0,.13,.13,0,.48,.81,.01,0,.61,0,.16,.46,.82,.47,0,.31,.04,.03,.01,0,.58,.03,.82,.14,.47,.19,.8,.35,.18,.08,.73,0,0,.01,.61,.71,.73,.86,.66,0,0,.03,0,.25,.37,.01,.54,.01,.21,0,.01,.67,.03,.01,.37,0,0,.05,0,.07,.06,.2,.02,0,.69,.2,0,.1,.06,.44,.09,.86,0,.77,0];export{a as pvalData};
