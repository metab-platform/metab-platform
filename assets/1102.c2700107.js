const a=[.81,.86,0,.6,0,.43,.05,.28,.55,.06,.23,.22,.3,.01,.28,.13,.14,.89,.23,.01,.01,0,.82,.74,.24,.01,0,.04,.81,0,0,0,.01,.06,.58,.66,.01,.24,.02,.01,.71,0,.02,.28,.84,.32,.26,.71,0,0,.13,.9,.31,.01,0,.36,.39,.03,.86,.01,0,0,0,.68,.16,.01,0,.74,.48,.32,.79,.08,0,.04,.01,.04,0,0,.03,.13,0,.09,.47,.02,.27,0,.02,.18,.01,.08,0,.35,.06,.06,.18,.76,.01,.19,.55,0,.36,0,0,.83,0,.53,.02,0,.01,0,.59,0,.7,.02,.92,.15,.63,0,.01,.07,0,.03,.13,.23,.58,0,0,.11,.03,.02,.23,.81,.45,0,.65,.08,0,.1,.01,.54,0,.27,0,.02,.38,.09,.41,.69,0,.79,0,.03,.73,.04,.19,.01,.1,.2,.02,.51,.06,0,.02,0,.04,0,.1,.01,.87,.02,.22,.01,.13,.34,.1,0,.8,0,0,0,.69,.34,.31,.05,0,.38,.38,.11,.01,.75,.83,.01,.45,0,0,0,0,.04,.98,.02,.46,0,.01,.8,.59,0,.57,.01,0,.5,.1,.42,.24,.06,.06,.04,.99,.37,0,.01,.05,0,0,0,.22,.02,.03,.01,0,.18,.45,.68,.28,0,.27,.13,.2,.44,.03,.97,0,.64,.14,.02,.1,.4,.2,.59,.23,.64,.14,.01,0,.37,0,.13,.89,.02,.09,.05,.21,.02,.01,0,.85,0,.01,.02,.09,.01,.93,.45,.01,0,.01,.58,.02,0,0,0,0,0,.43,.04,.01,.07,0,.01,.01,.01,.69,0,.02,.3,.68,.01,.13,.98,.57,.13,.18,.02,.02,.3,.08,.46,.01,0,.09,.62,0,.29,.2,.58,.56,.11,.13,0,0,.16,.01,.07,.6,0,.08,.03,.01,.23,.7,.07,0,.23,.47,.13,0,.07,0,.15,.37,0,0,.01,.42,.21,.03,0,.32,0,.02,.01,0,.12,.1,.01,.1,.16,.01,.03,0,.02,.32,.86,.05,0,.62,.03,.46,0,0,.31,0,.08,.64,.73,0,0,.75,.08,.38,.01,.11,.49,.62,.8,.65,.22,.97,.61,0,0,0,.11,.18,.68,.59,0,0,.01,.37,.83,.53,.28,0,.35,.13,.85,.68,0,0,.02,0,.04,.82,0,0,.6,0,.21,0,0,.29,.05,.01,.19,.41,.03,.01,1,.53,.54,.5,.86,.09,.44,0,.01,.41,.01,0,0,0,.01,0,.78,0,.01,.01,.01,.72,.01,.01,0,0,.29,.1,.72,0,0,.16,.05,0,0,0,0,.2,.33,.44,.4,.26,.03,.01,0,.01,.81,0,.02,0,.1,0,0,0,.08,0,.07,0,.82,.03,.42,.83,0,.59,.58,.03,.46,0,.04,.14,0,.01,.01,.01,.59,0,.08,0,.89,.61,.01,.05,0,0,.21,0,.39,0,0,0,.02,0,.04,.04,0,.83,.74,.01,.23,.48,.11,.73,0,0,.18,.64,.12,.11,.1,.01,.32,.37,.13,.67,0,.27,0,.32,.05,.28,0,0,.58,0,.01,0,0,0,.3,0,.45,.26,.24,0,0,1,.76,.76,.06,.53,.22,0,.25,0,.01,.1,.76,.01,0,.52,.01,.01,.38,.25,.01,0,.9,0,.26,.02,0,.01,.02,.24,.51,.63,0,.73,.02,.01,.04,.01,.12,.01,0,0,0,.11,0,0,.01,.02,.24,.19,.09,.71,0,.02,.02,.01,.2,.37,.15,.25,.54,.13,.35,.33,.52,.06,.01,0,.78,.96,0,.15,0,.03,0,.02,0,.37,0,.15,0,0,.04,.44,0,.58,.01,0,0,.75,0,.11,0,.03,.12,.52,.29,.42,.11,.01,.01,0,0,.17,.03,.32,.44,.05,0,.4,.08,.25,0,0,.03,0,0,.13,.53,.04,.48,.04,.02,.23,.07,.01,.01,.01,.97,.32,1,1,.16,.23,.01,0,.18,0,.35,.01,.23,.02,.02,.03,.09,.43,.62,.6,0,0,.04,.03,.05,.26,.92,.24,.11,.39,.33,.08,0,.01,.09,.03,.89,.29,0,.66,.01,.03,0,0,.02,0,0,.03,.03,.06,.03,.85,.04,0,0,.39,.22,.42,.05,.12,0,.45,0,.85,.41,.01,.71,.01,.12,0,.82,.34,0,.05,.12,.22,.12,0,.02,.23,.7,.42,.05,.01,.23,0,.44,.18,.17,0,0,0,.9,.52,0,0,0,0,0,.98,0,0,.29,0,.46,.02,0,0,0,.02,0,.23,.24,0,0,.04,.1,.01,.01,0,.06,.59,.94,0,0,0,.05,0,0,.26,.01,.9,.45,.68,.17,.35,.01,.68,0,.01,.28,.4,.01,.06,.13,.83,.15,.05,.41,.07,0,0,.02,.13,.04,0,0,.01,0,0,.12,.25,0,.06,.9,.12,.82,0,.01,.07,.36,0,0,0,.13,.9,.08,0,.25,.11,.39,.69,.39,.55,0,.13,0,.37,.2,.07,.13,0,.01,.68,0,.06,.64,0,.93,0,.49,0,0,0,0,0,.06,.24,.01,.01,0,.37,.14,.44,.32,.53,.04,.84,0,.42,.03,.65,0,.02,.49,0,.17,.24,0,.34,.3,.13,.33,.47,.03,0,0,.01,.01,.02,0,0,0,.03,.01,0,0,0,.46,0,0,.99,.58,.16,.01,.58,.03,.21,0,.93,.7,.21,.36,.64,.01,.14,.74,0,.95,0,.47,.03,.46,.49,.49,0,.87,0,.55,0,.4,0,.98,.64,.01,.08,.54,.67,.11,0,0,0,.17,0,.24,.04,.37,.04,.15,.08,0,.01,.25,0,.24,.27,.08,.05,.65,.95,.5,.5,.08,.11,.83,.32,.68,.95,.43,.03,.03,.92,0,.11,0,.96,.61,.01,.2,1,.58,0,.13,.03,0,.81,.04,0,.08,.23,.69,.12,.14,.07,.01,.13,0,.02,.45,.25,.06,.27,.01,0,.7,.88,0,.09,.91,.52,.01,0,.01,.03,.09,.99,.28,.06,.64,.21,.05,0,.44,.87,.56,0,.18,.01,.18,0,.63,0,0,0,.01,.6,.01,.01,.07,0,0,.12,0,.47,.14,0,.01,.21,.47,0,.04,.02,.75,0,0,.02,0,.73,.77,0,.01,.87,0,.11,.93,.02,.09,.03,.32,0,.1,.01,0,0,.28,0,0,.24,.29,.09,.02,.53,.37,.66,.22,.24,.34,.4,.59,0,.21,.61,0,0,.09,.36,0,.01,.61,.25,.47,.04,.51,.28,.05,0,.36,.13,.31,0,.78,.7,.08,0,.03,.47,.01,.49,.17,.02,.26,.13,.06,.34,0,.05,.74,.01,.02,0,0,.05,.03,.06,.1,0,.47,.09,.37,.13,.29,.02,.34,.08,.1,.06,.13,.01,.05,.3,.01,.19,.79,.13,.02,0,.8,.67,0,0,.07,.24,0,.1,0,.01,0,.67,0,.02,.02,0,.71,.13,.34,.01,.05,.28,.02,.02,.01,.08,0,.01,.39,.26,0,.15,0,.08,.01,0,.7,0,.21,.01,.01,.34,.25,.05,.33,.03,.01,.01,.43,.34,.32,.9,.86,0,.11,0,.46,.74,0,.11,.4,0,.01,.21,0,0,.03,.94,.31,.01,0,0,0,.05,.25,.04,.54,0,.48,.18,.49,.75,.67,.11,.16,0,.62,.13,.29,.21,.2,0,.75,.83,.14,.62,0,0,0,.14,.17,.01,0,.14,0,.06,0,.88,.05,.34,.58,0,.61,0,.35,0,.01,.05,.03,.72,.05,0,0,.01,.21,.24,.89,.04,.45,.04,.62,.07,0,0,0,.3,0,.49,.1,.33,.34,.4,.79,.1,0,.01,.01,.01,.57,.72,.43,.13,0,.09,.74,0,.07,0,.01,.94,0,0,0,.21,.01,.01,.03,.11,.82,.67,.21,0,.01,.65,.15,.03,.63,.21,.13,.08,.39,.31,.64,.6,.39,.01,.85,.81,.23,.19,.01,.98,.24,0,0,.08,0,.05,0,.01,.57,.01,.44,0,.27,.03,.18,.71,0,.02,.62,.91,0,0,.04,0,0,0,.31,.08,.06,.49,.32,0,.16,.53,.13,.01,.09,.83,.77,.01,.05,.25,.18,.04,.13,0,0,0,.02,0,.67,0,.22,0,.58,.69,.01,.3,.2,.07,.84,.55,.11,.08,.84,.04,.15,0,.04,.02,.15,.19,.26,.23,.83,.43,0,0,0,.02,.08,.05,.01,0,.04,.32,0,0,.89,0,.01,0,.01,.32,.05,.14,.04,.02,.03,0,.76,.16,0,.78,0,.16,.37,.11,.01,.49,.99,.11,.01,.49,.12,0,0,.42,0,.01,.14,.21,.18,.02,.13,.87,0,.2,.41,0,.88,0,.94,0,0,.04,.03,.05,.75,0,.58,.6,0,.74,0,.04,.99,0,.97,0,.01,0,0,0,0,0,0,0,.95,.67,0,0,.96,.09,.02,0,0,.53,0,.02,.14,0,.02,.07,.08,0,.04,.04,.01,.02,0,.62,.7,0,0,.34,.02,.19,.01,.01,.01,0,.3,.38,.63,0,.07,0,.01,0,.55,0,.02,0,.01,0,0,.81,.07,.17,0,.67,.1,.07,.01,.42,.02,.02,0,.16,.01,.02,.11,0,0,0,.55,.03,.19,0,0,.01,0,.44,0,.11,0,.3,.15,.36,.79,.29,.82,.02,.95,0,.29,0,.26,.02,0,.01,0,.01,.01,.74,.6,.15,0,0,.68,.45,.01,0,0,.51,.02,.66,.54,0,0,0,.13,.99,.07,.02,0,0,0,.03,0,0,0,.11,0,.14,.62,0,.07,0,.28,0,0,.6,0,.06,.07,.76,0,.05,.44,0,.7,.07,.02,.08,.14,.04,0,0,.42,.02,0,.53,.17,.01,.12,.02,.16,.83,.91,.04,.42,.01,.97,0,0,.11,0,0,.28,.53,.03,0,0,.33,0,0,.01,.01,.23,.2,.45,.1,.08,.31,0,0,0,.42,.02,0,0,.19,.73,.69,.13,0,.85,0,.06,0,0,.43,0,.03,0,0,.37,.91,.91,.42,.72,.49,0,.05,.24,0,.15,.58,.35,0,0,.02,.04,.01,.17,0,.7,0,0,.23,0,.01,0,.11,.73,.01,.1,.01,0,.01,.26,0,0,0,0,0,.16,.62,0,.01,0,0,0,.01,.98,.01,.94,0,.82,.05,.02,0,0,.01,.03,0,.92,0,.46,.08,0,0,.51,.12,.02,.03,0,.06,.01,.1,0,0,.76,.01,.42,.93,.4,.29,.07,.61,.2,.51,.01,.01,.22,.36,.02,.01,.16,0,.21,.02,.34,0,.18,0,.7,0,.94,.53,.4,.94,0,.53,0,0,0,.07,.91,.01,.14,.02,.06,.01,.41,0,0,.5,.51,.51,0,.96,.03,0,.3,0,0,0,0,0,0,0,0,.02,.09,.54,.8,.03,.02,.8,0,0,.8,0,.6,0,.01,0,.09,.03,0,.01,.01,0,.06,.4,.34,.39,0,.13,.42,.02,.01,.28,0,.5,.42,.76,0,.02,.23,0,.04,.02,.04,.1,.15,.25,.83,0,.38,.01,0,0,.1,0,.01,.03,.1,.01,.69,.27,0,.01,.07,.48,.97,.77,.84,0,.01,.98,.05,.12,.02,.03,.14,.09,.06,.41,0,.54,.07,.16,.01,.01,.05,0,0,.16,0,.41,.06,.68,0,.72,.02,.05,0,.88,0,.08,.03,.55,0,0,.01,0,.71,.01,.01,.01,0,0,.22,0,.04,0,0,.15,.06,0,.02,.02,.01,0,.07,.21,.01,.62,0,.01,.02,.01,.03,.02,0,.78,0,.36,.21,0,.03,.22,.01,.74,.26,0,.03,.01,0,.01,.71,0,.01,0,.01,.01,.07,.02,.05,0,.83,.03,.14,.17,.87,.43,.46,.04,.15,.24,0];export{a as pvalData};
