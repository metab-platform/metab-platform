const a=[0,.69,.06,.6,.1,0,.28,.29,.06,.04,.05,.05,.02,.03,.01,.73,.05,.08,0,.21,.72,.57,.14,.03,0,.03,.67,.57,.44,.72,.27,.48,.03,0,0,.3,0,.02,.63,.05,.85,.01,.34,.04,.2,.06,.68,0,.73,.35,.69,0,.53,.03,.04,.07,.02,0,.14,.06,.08,.04,.1,.22,.53,.7,.01,.03,.22,.51,.69,.26,.31,.14,.06,.76,.28,.15,.26,.13,.49,.14,.83,.04,.24,.4,.03,.77,.09,.05,.52,.55,.56,.04,.03,.61,.03,.16,.6,.06,.68,.01,.01,.92,.04,0,.28,.29,0,.04,.02,.28,.61,.49,.13,.13,.15,.66,.1,.01,.01,.29,0,.12,.2,.49,.11,.04,.94,.05,.46,.9,.56,.42,.01,.09,.33,.29,.75,.16,.06,.01,.21,.01,0,.76,.76,.07,0,.41,.02,.79,.76,.13,.89,.19,.12,0,.88,.01,.42,.06,.01,.38,.38,.29,.26,.59,.22,.02,0,.88,.21,.28,.86,.68,.53,.62,.63,.03,0,.04,.45,.23,.17,.01,.21,0,.15,.03,.38,.31,.18,.01,.04,.01,.07,.01,.13,.81,.34,.01,.04,.17,.48,.11,.01,.8,.14,0,.45,.01,.43,.01,0,.75,.22,.49,.92,.22,.12,.14,.12,.03,.63,.05,.79,.49,0,.9,.84,.57,.02,.1,0,0,.09,.8,.14,.51,.87,.01,.81,.54,.96,.58,.32,.65,.1,.08,.97,.01,.2,.44,.04,.27,.21,0,.26,.19,.66,.55,.01,.07,.55,.03,.32,.03,.17,0,.16,.02,.02,.18,.01,.01,.42,.13,.09,.86,.98,.9,.11,.02,.57,.19,.31,0,.18,.31,.75,.26,.04,.6,.61,.22,.46,.09,.46,.46,.45,.1,.47,.01,.24,.84,.46,.05,.52,.35,.15,.77,0,.01,.03,.59,.83,.58,.17,.79,.21,.23,.09,.07,.47,.39,.01,.13,.92,.45,.01,.9,.52,0,.92,.02,.81,.73,.45,.54,.33,.4,.8,.77,.06,.13,.68,.4,.83,.56,.04,.75,0,.32,.3,.08,.3,.48,.06,.11,.01,.77,.83,.06,.2,.18,.01,.02,.29,.15,.18,.07,.19,.17,.2,.43,.84,.09,.78,.32,.06,.26,.82,.59,.76,.19,.89,.6,.01,.02,.05,0,.07,.07,.01,.09,.69,.39,.43,.1,.54,.26,.17,.05,.5,.92,.14,.11,.16,.02,.35,.08,.62,.03,.03,.1,.06,.01,.94,0,.01,.27,.27,0,.34,.02,.03,.06,.63,.09,.22,.23,0,.05,.56,.1,.05,.06,.09,0,.01,.05,.22,.02,.2,.01,.06,.2,.12,.39,.18,.85,.07,.74,.79,.83,.81,.01,.02,.57,.13,.08,.68,.11,.63,0,.03,.95,.83,.04,.35,.01,0,.02,.7,.01,.27,.45,.01,.93,.04,.02,.02,.28,.18,.37,.51,.01,.91,.09,.44,.21,.9,.33,.02,.05,.35,0,.16,.79,.89,.61,0,.02,.08,.62,.22,0,.09,.53,.01,.16,.19,.08,.47,.95,.05,.69,.13,.04,.96,.03,.12,.22,.2,0,.99,.08,.74,.01,.55,.52,.21,.21,0,0,.26,.21,.61,.1,.49,.81,0,.85,.36,.84,.25,.67,.06,.27,.39,.03,.08,.04,.55,0,.36,.03,.76,.2,.2,.2,.67,.7,.13,0,.92,0,.2,.24,.18,.11,.93,.15,.05,.09,.09,.48,.3,.27,.25,0,.14,.45,.13,.03,.06,.15,.73,.01,.06,.1,.37,.01,.34,.77,.18,.36,0,.62,.04,.04,.08,.02,.89,.81,.91,.11,0,.2,.05,0,.3,.13,0,.31,.07,.71,.96,0,.19,.06,.57,.75,.8,0,.43,.47,.01,.13,.1,.26,.01,.49,.03,.06,.01,.53,.58,.68,.63,.03,.37,.2,.23,.01,.51,.09,.01,.21,0,.59,.22,.05,.01,.2,.01,.26,0,.32,.06,.46,.02,.29,.85,0,0,.55,.02,.15,.23,.68,0,.9,.05,.25,.07,.05,.72,.14,.26,.94,.23,.01,.11,.02,.79,.08,.01,.28,.24,.25,.95,0,.02,.43,0,.01,.43,.93,.08,.88,.19,.94,.19,.05,.59,.01,.01,.87,.01,.42,.67,.39,.09,.51,.98,.76,.03,.75,.32,0,0,0,.05,.32,.74,.39,.01,.31,.63,.21,.02,.58,.84,.39,.02,.96,.51,0,0,.04,.83,.49,.07,.05,.24,.03,.42,.74,0,.32,.04,.22,.01,.68,.73,.25,0,.7,.98,.62,.02,.39,.72,.32,.18,0,.66,0,.65,.43,.16,0,.64,.21,.99,.64,.01,.77,.12,.87,.78,.11,.04,.03,.47,.25,0,.78,.81,.43,.01,.06,.06,.67,.07,.16,.14,.27,.54,.1,.01,.04,0,.11,.13,.66,.35,.02,.79,.5,.02,.06,.07,.51,0,.89,.33,.04,0,0,.44,.9,.1,.03,.09,0,.46,.02,.59,.07,.15,.62,.04,.43,.46,.07,0,.9,.01,.02,0,.31,.76,.04,.49,.22,.89,.67,.64,.22,.02,.99,.4,.05,.14,.74,.17,0,0,.06,.73,.07,.81,.21,.36,0,.46,.5,.69,.41,.03,.64,.86,.86,.17,.23,.03,0,.92,.08,.34,.06,.28,.31,.28,.11,.04,.13,.1,0,0,.34,.12,0,.92,0,.48,.07,.04,.75,.02,.63,0,.03,.01,.73,0,.42,.05,.67,.41,.08,.06,.29,.04,.13,.4,.89,.55,.49,.06,0,.04,.13,0,.09,.07,.72,.25,.1,.03,.02,.38,.02,.38,.4,0,.03,0,.21,.47,.32,.7,.9,.97,0,.75,.42,.95,.4,.64,.77,.55,.97,.05,.93,.08,.18,.01,.67,.14,.61,.05,.36,.6,.99,0,.66,.01,.02,.01,.17,.14,.41,.79,.75,.71,0,.08,.31,.53,.57,.39,.15,.38,0,0,.03,.47,.27,.64,.18,.01,.75,.03,.35,.34,.16,.24,.01,.51,.53,.03,.1,0,.63,.12,0,.78,.03,.53,.15,.05,.23,.12,.17,.91,.02,.1,.24,.13,.3,.75,.83,.04,.25,0,.06,0,.49,.2,.51,.14,.12,.02,.69,.49,.64,.92,.07,.11,.04,.06,.63,0,.59,.08,.19,.44,.12,.55,.8,.63,.09,.73,.69,.64,.03,.91,0,.02,.05,.47,0,.62,.02,.35,.13,.14,.18,0,.14,.11,.48,.07,.24,.01,.02,0,.62,.67,.01,.08,.37,.08,0,.99,.04,.07,.32,.11,.83,.1,.15,.39,.6,.01,.08,.3,.01,.5,.13,.18,0,.86,.45,.09,.87,0,.81,.63,0,.95,0,.61,.05,.14,.13,.19,.02,.05,.01,.11,.01,.83,.01,.58,.38,.2,.02,.11,0,0,.05,.02,.32,0,.1,.1,0,.94,.13,.02,0,.06,.08,.03,.05,.1,.1,.03,.24,.69,.83,0,.35,.06,0,.01,.45,.04,.44,.08,.75,.08,.04,.06,.17,.49,0,.12,.69,.11,.4,.06,.26,.66,.16,.42,.1,.93,.06,.17,0,.09,.03,.51,.09,.09,.37,.63,.99,.03,0,.73,.05,.05,.38,.29,0,0,.04,.5,.02,.26,.07,.07,.71,.02,0,0,.2,.01,.32,.07,.08,.14,.96,.79,.07,0,0,0,.05,.43,.58,.16,.3,.75,.15,.1,.66,.07,.07,.93,.4,.01,0,.02,.04,.12,0,0,.22,.03,.39,.16,0,.03,.64,.23,.06,0,.09,.16,.01,.76,.04,.75,.09,.11,.86,.65,.01,.84,.86,.78,0,.07,.01,0,.08,.79,.21,.86,.04,.61,.34,.28,0,0,.77,.04,0,.07,.19,.63,0,.03,0,.08,0,.89,.83,.72,.03,.59,.22,.03,.01,.21,.25,.25,.05,.18,.17,.03,.16,.43,.04,.02,.2,.8,.89,.79,0,.05,.03,.85,.42,0,.04,.58,.03,.13,.14,.04,.69,.18,.01,.07,.36,.1,.1,.99,.03,.79,.01,.27,0,.49,.06,.19,.1,.85,.09,.08,.72,.13,.31,.01,0,0,.03,.92,.84,.43,.48,0,.02,0,.34,.14,.26,.21,.64,.3,.79,.73,.08,.98,.36,.14,.5,.8,.28,.28,.46,.78,.81,.91,.05,.16,.45,.01,.38,.02,.02,.05,.01,.11,.58,.01,0,.9,0,.34,.54,.13,0,.99,.18,0,.05,.09,.53,0,.55,.03,.1,0,.67,.21,0,.35,.93,.01,.54,.01,.01,.11,.56,.7,.78,.32,.05,.12,.03,.07,.59,.06,.55,.08,.01,.22,0,.06,.02,.56,.04,.34,.05,0,.72,.13,.62,.28,.01,.26,.31,.67,.01,.05,.03,.02,.62,.68,.08,.29,.32,0,.39,0,.02,.64,.36,.16,0,.21,.1,.19,.4,.02,.11,.03,.02,.01,0,.65,.03,0,.13,.58,.07,.88,.66,.08,0,.42,0,.12,.05,.66,.94,.17,.24,.19,0,.59,.87,.16,.4,.22,.31,.04,.99,.01,0,.01,.69,.23,.98,.04,.01,.07,.13,.81,.04,.97,.5,.54,.01,.66,.21,.09,.02,.14,.68,.74,.01,.67,.52,.02,.3,.45,.06,.58,.05,.05,.6,.31,.08,.03,.18,.1,.49,.1,.53,.56,.58,.09,.18,0,.56,.19,.29,.01,.78,.38,.69,.73,.48,.36,.48,.37,.48,.01,.33,.13,.16,.01,.18,0,.22,.72,.79,.25,.01,.43,.79,.06,.09,.18,.89,.54,.84,.05,.03,.08,.01,.33,.49,.75,.22,.01,.13,.13,.01,.22,.21,.14,.07,.04,.19,.73,.96,.04,.41,.63,.08,0,.59,.2,.06,.09,.36,.19,.03,.05,.01,.02,0,.97,.5,.01,.27,.02,.56,.08,.26,0,.25,.88,.01,.14,.06,.01,.08,.01,.05,.97,.02,.18,.7,0,.91,.19,.05,.73,.09,.16,.97,.92,.04,.53,.26,.22,.89,.4,.17,.07,.02,.01,.98,.11,.48,.24,.13,.44,.09,.83,.34,.04,0,.07,0,.02,.09,.4,.08,.39,.69,0,.76,.9,.06,.43,.38,0,.52,0,.08,.71,.02,.02,.01,.6,.1,.01,0,.02,.02,.04,.41,.88,.87,.03,.07,.11,.03,.77,.53,.15,.06,.04,.56,.27,.01,.27,.44,.39,.67,.03,.08,.13,.09,.9,.08,.02,.04,.63,.02,.44,.01,.82,.77,.37,.13,0,.1,.36,.01,.07,.57,.12,.44,0,.02,.04,.47,0,.01,.54,.78,.14,.03,.42,.21,.44,.17,.29,.08,.1,.63,.25,.01,.01,.18,0,.11,.05,.7,.17,.91,.39,.42,.15,.09,.09,.13,.09,.73,0,.12,.04,.35,.42,.05,.01,.01,0,.11,.11,.35,.28,.21,.15,.01,.62,.79,.41,.78,.01,.02,.02,.07,0,.01,.1,.07,.03,.08,.01,.33,.01,.91,.84,.01,.73,.67,.69,0,.01,.01,0,.32,.13,.35,.02,.21,.07,.43,.7,0,0,0,.31,.25,.26,.06,0,.03,.41,.51,.56,.79,1,.18,.24,.86,.7,.09,.53,.31,.13,.39,.4,.02,.41,0,0,.48,.01,.04,.05,.82,.06,.21,.02,.64,.02,.22,.22,.81,.65,.5,.44,.29,.01,0,0,.22,.01,.01,.03,.01,0,.26,.06,.57,.89,0,.2,.39,.06,.17,0,0,.09,.51,.11,.84,.18,.07,.66,.03,.11,.12,0,.01,.3,.94,.37,.58,.98,.11,0,.62,.01,.58,.01,.02,.7,0,.49,.02,.05,0,.56,.26,.11,.2,.1,.7,0,.02,.23,.93,0,.04,.05,.09,.02,.06,.12,.1,.04,0,.75,.52,.15,.16,0,0,.6,.07,.05,0,.41,.01,.22,0,.01,.88,.38,0,.06,.04,.03,.61,0,.05,.08,.84,.06,.32,.38,.93,.22,.01,.85,.18,.54,.23,.05,.01,.83,.46,.95,.08,0,.03,.52,.02,0,0,.01,.72,.14,.03,.08,0,.07,.05,.05,.52,.46,.3,.05,.01,.05,.02,.04,.01,.16,.01,.02,.35,0,.02,.04,.04,.09,.06,.93,.02,.06,.89,.02,.11,0,.06,.84,.16,0,.29,.11,.04,.74,.25,.11,.9,.04,.97,.04,.6,.28,.89,.97,.69,.06,.06,0,.93,.04,.83,.1,0,.4,.02];export{a as pvalData};
